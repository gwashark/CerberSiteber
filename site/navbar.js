function updatemenu() {
  if (document.getElementById("responsive-menu").checked == true) {
    document.getElementById("menu").style.borderBottomRightRadius = "0";
    document.getElementById("menu").style.borderBottomLeftRadius = "0";
  } else {
    document.getElementById("menu").style.borderRadius = "10px";
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  let add2home = window.AddToHomeScreen({
    appName: "CerberVT",
    appNameDisplat: "standalone",
    appIconUrl: "/assets/favicons/apple-touch-icon.png",
    assetUrl:
      "https://cdn.jsdelivr.net/gh/philfung/add-to-homescreen@2.93/dist/assets/img/",
    maxModalDisplayCount: 1,
    displayOptions: { showMobile: true, showDesktop: true },
    allowClose: true,
  });
  const navbarData = await (await fetch("/navbar.json")).json();
  const template = document.querySelector("#navtemplate").innerHTML;
  const rendered = Mustache.render(template, { links: navbarData });
  document.querySelector("#navlinks").innerHTML = rendered;

  let addToHome = document.querySelector(".plus-icon") || null;
  if (addToHome) {
    if (!window.matchMedia("(display-mode: standalone)").matches)
      addToHome.hidden = false;
    addToHome.addEventListener("click", function () {
      add2home.show();
      addToHome.hidden = true;
    });
  }
});
