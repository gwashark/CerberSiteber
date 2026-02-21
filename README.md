# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv create --template minimal --types ts --add prettier --install npm cerbersiteber
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Cloudflare Pages deployment

Build locally then deploy with Wrangler (wrangler will read `pages_build_output_dir` from `wrangler.jsonc`):

```bash
npm install
npm run build
npx wrangler pages deploy
```

Alternatively, connect the repository in the Cloudflare Pages dashboard and set:
- Build command: `npm run build`
- Build output directory: `build`

Note on build failures:

- If the Pages build fails during `npm install` with peer dependency errors (ERESOLVE), this repository includes an `.npmrc` with `legacy-peer-deps=true` so the installer accepts legacy peer deps. This is a temporary workaround.
- Long-term fix: update `@sveltejs/adapter-static` to a version compatible with your `@sveltejs/kit` (or match the adapter to the Kit major version).
