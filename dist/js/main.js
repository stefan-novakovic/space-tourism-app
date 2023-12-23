import { homeExploreBtnListen } from "./homePage.js";
import {
  destinationMoonsNavListen,
  destinationMoonsNavMenuMarkerPositionSwitchListen,
} from "./destinationPage.js";
import { crewDotBtnsListen, crewWindowResizeListen } from "./crewPage.js";
import { technologyDotBtnsListen } from "./technologyPage.js";

const initApp = () => {
  console.log("DOM Content Loaded!");
  startApp();
};

document.addEventListener("DOMContentLoaded", initApp);

const startApp = async () => {
  const dataJSON = await getJSONData();

  navMenuMarkerPositionSwitchListen();
  hamburgerBtnListen();

  homeExploreBtnListen();

  destinationMoonsNavListen(dataJSON);
  destinationMoonsNavMenuMarkerPositionSwitchListen();

  crewDotBtnsListen(dataJSON);
  crewWindowResizeListen(dataJSON);

  technologyDotBtnsListen(dataJSON);
};

const getJSONData = async () => {
  const data = await fetch("data.json");
  const dataJSON = await data.json();
  return dataJSON;
};

const navMenuMarkerPositionSwitchListen = () => {
  const marker = document.getElementById("menu-marker");
  const listItem = document.querySelectorAll(".header .nav .ul .li");

  listItem.forEach((link) => {
    link.addEventListener("click", (event) => {
      marker.style.left = link.offsetLeft + "px";
      marker.style.width = link.offsetWidth + "px";
    });
  });
};

const hamburgerBtnListen = () => {
  const hamburgerBtnOpenMenu = document.getElementById("hamburger-btn-open");
  const hamburgerBtnCloseMenu = document.getElementById("hamburger-btn-close");
  const phoneSidebarMenu = document.getElementById("phone-sidebar-menu");

  hamburgerBtnOpenMenu.addEventListener("click", (event) => {
    phoneSidebarMenu.classList.remove("phoneMenuHide");
    phoneSidebarMenu.classList.add("phoneMenuShow");
  });

  hamburgerBtnCloseMenu.addEventListener("click", (event) => {
    phoneSidebarMenu.classList.remove("phoneMenuShow");
    phoneSidebarMenu.classList.add("phoneMenuHide");
  });
};
