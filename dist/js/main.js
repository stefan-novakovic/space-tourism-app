const initApp = () => {
  console.log("DOM Content Loaded!");
  startApp();
};

document.addEventListener("DOMContentLoaded", initApp);

const startApp = async () => {
  const dataJSON = await getJSONData();
  exploreBtnListen();
  hamburgerBtnListen(dataJSON);
};

const exploreBtnListen = () => {
  const exploreBtn = document.getElementById("explore-btn");
  const exploreBtnOverlay = document.getElementById("explore-btn-overlay");

  exploreBtn.addEventListener("mouseover", (event) => {
    exploreBtnOverlay.classList.remove("overlay-not-active");
    exploreBtnOverlay.classList.add("overlay-active");
  });

  exploreBtn.addEventListener("mouseleave", (event) => {
    exploreBtnOverlay.classList.remove("overlay-active");
    exploreBtnOverlay.classList.add("overlay-not-active");
  });
};

const hamburgerBtnListen = (dataJSON) => {
  const hamburgerBtnOpenMenu = document.getElementById("hamburger-btn-open");
  const hamburgerBtnCloseMenu = document.getElementById("hamburger-btn-close");
  const phoneMenu = document.getElementById("phone-menu");

  hamburgerBtnOpenMenu.addEventListener("click", (event) => {
    phoneMenu.classList.remove("phoneMenuHide");
    phoneMenu.classList.add("phoneMenuShow");
  });

  hamburgerBtnCloseMenu.addEventListener("click", (event) => {
    phoneMenu.classList.remove("phoneMenuShow");
    phoneMenu.classList.add("phoneMenuHide");
  });
};

const getJSONData = async () => {
  const data = await fetch("data.json");
  const dataJSON = await data.json();
  return dataJSON;
};
