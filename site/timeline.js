let hash = window.location.hash;

document.addEventListener("DOMContentLoaded", async function () {
  const timelineData = await (await fetch("/timeline.json")).json();
  let timelineMustache = { 
    timeline: timelineData
  };
  if (hash) {
    timelineMustache .timeline = timelineData.filter((item) => item.shortdate === hash.replace("#", ""));
  }
  const template = document.querySelector("#template").innerHTML;
  const rendered = Mustache.render(template, timelineMustache);
  document.querySelector("main").innerHTML = rendered;
});

// When #hash is changed, re-render the timeline
window.addEventListener("hashchange", async function () {
  hash = window.location.hash;
  const timelineData = await (await fetch("/timeline.json")).json();
  let timelineMustache = { timeline: timelineData };
  if (hash) {
    timelineMustache = {
        timeline: timelineData.filter((item) => item.shortdate === hash.replace("#", "")),
    }
  }
  const template = document.querySelector("#template").innerHTML;
  const rendered = Mustache.render(template, timelineMustache);
  document.querySelector("main").innerHTML = rendered;
});