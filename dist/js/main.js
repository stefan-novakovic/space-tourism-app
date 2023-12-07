const initApp = () => {
  console.log("DOM Content Loaded!");
  startApp();
};

document.addEventListener("DOMContentLoaded", initApp);

const startApp = async () => {
  const dataJSON = await getJSONData();
  exploreBtnListen();
  hamburgerBtnListenForMenuOpen(dataJSON);
  hamburgerBtnListenForMenuClose();
};

const exploreBtnListen = () => {
  const exploreBtn = document.getElementById("explore");
  const exploreOverlay = document.getElementById("explore-overlay");

  exploreBtn.addEventListener("mouseover", (event) => {
    exploreOverlay.classList.remove("explore-hover-overlay-notActive");
    exploreOverlay.classList.add("explore-hover-overlay-active");
  });

  exploreBtn.addEventListener("mouseleave", (event) => {
    exploreOverlay.classList.remove("explore-hover-overlay-active");
    exploreOverlay.classList.add("explore-hover-overlay-notActive");
  });
};

const hamburgerBtnListenForMenuOpen = (dataJSON) => {
  const hamburgerBtnHome = document.getElementById("hamburger-btn-home");
  const phoneMenu = document.getElementById("phone-menu");

  hamburgerBtnHome.addEventListener("click", (event) => {
    phoneMenu.classList.remove("phoneMenuHide");
    phoneMenu.classList.add("phoneMenuShow");
  });
  console.log(dataJSON);
};

const hamburgerBtnListenForMenuClose = () => {
  const hamburgerBtnMenu = document.getElementById("hamburger-btn-menu");
  const phoneMenu = document.getElementById("phone-menu");

  hamburgerBtnMenu.addEventListener("click", (event) => {
    phoneMenu.classList.remove("phoneMenuShow");
    phoneMenu.classList.add("phoneMenuHide");
  });
};

const getJSONData = async () => {
  const data = await fetch("data.json");
  const dataJSON = await data.json();
  return dataJSON;
};
