const fs = require('fs');
const path = require('path');
const { minify: minifyHtml } = require('html-minifier');
const CleanCSS = require('clean-css');
const UglifyJS = require('uglify-js');

const inputDir = process.argv[2];
const outputDir = process.argv[3];

if (!inputDir || !outputDir) {
    console.error('Usage: node minify.js <inputDir> <outputDir>');
    process.exit(1);
}

if (!fs.existsSync(inputDir)) {
    console.error(`Input directory ${inputDir} does not exist`);
    process.exit(1);
}

if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true });
}

function minifyFile(filePath, outputFilePath) {
    try {
        const ext = path.extname(filePath);
        const content = fs.readFileSync(filePath, 'utf8');
        let minifiedContent;

        switch (ext) {
            case '.html':
                minifiedContent = minifyHtml(content, {
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyJS: true,
                    minifyCSS: true,
                });
                break;
            case '.css':
                minifiedContent = new CleanCSS().minify(content).styles;
                break;
            case '.js':
                minifiedContent = UglifyJS.minify(content).code;
                break;
            default:
                fs.copyFileSync(filePath, outputFilePath);
                return;
        }

        fs.writeFileSync(outputFilePath, minifiedContent, 'utf8');
    } catch (error) {
        console.error(`Error minifying file ${filePath}:`, error);
    }
}

function minifyFolder(inputDir, outputDir) {
    try {
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        fs.readdirSync(inputDir).forEach(file => {
            const inputFilePath = path.join(inputDir, file);
            const outputFilePath = path.join(outputDir, file);

            if (fs.lstatSync(inputFilePath).isDirectory()) {
                minifyFolder(inputFilePath, outputFilePath);
            } else {
                minifyFile(inputFilePath, outputFilePath);
            }
        });
    } catch (error) {
        console.error(`Error processing folder ${inputDir}:`, error);
        process.exit(1);
    }
}

minifyFolder(inputDir, outputDir);