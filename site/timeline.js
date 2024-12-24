document.addEventListener("DOMContentLoaded", async function() {
    const timelineData = await (await fetch('/timeline.json')).json()
    const timelineMustache = {timeline: timelineData}
    const template = document.querySelector("#template").innerHTML
    const rendered = Mustache.render(template, timelineMustache)
    document.querySelector("main").innerHTML = rendered
});