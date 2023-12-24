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

let counter = 0;
let inProgress = false;
const navMenuMarkerPositionSwitchListen = () => {
  const marker = document.getElementById("menu-marker");
  const listItem = document.querySelectorAll(".header .nav .ul .li");

  for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener("click", (event) => {
      if (!inProgress) {
        inProgress = true;

        counter += 1;
        marker.style.left = listItem[i].offsetLeft + "px";
        marker.style.width = listItem[i].offsetWidth + "px";

        if (counter % 2 !== 0) {
          document.getElementById("home-page").style.transform =
            "translateX(102%)";
        } else {
          document.getElementById("home-page").style.transform =
            "translateX(-102%)";
        }
        document.getElementById("home-page").style.transition =
          "all 1s ease-in-out";
        setTimeout(() => {
          if (counter % 2 !== 0) {
            document.getElementById("home-page").style.transform =
              "translateY(102%)";
          } else {
            document.getElementById("home-page").style.transform =
              "translateY(-102%)";
          }
          document.getElementById("home-page").style.transition = "none";
          document.getElementById("home-page").style.display = "none";
        }, 1001);

        if (counter % 2 !== 0) {
          document.getElementById("destination-page").style.transform =
            "translateX(102%)";
        } else {
          document.getElementById("destination-page").style.transform =
            "translateX(-102%)";
        }
        document.getElementById("destination-page").style.transition =
          "all 1s ease-in-out";
        setTimeout(() => {
          if (counter % 2 !== 0) {
            document.getElementById("destination-page").style.transform =
              "translateY(102%)";
          } else {
            document.getElementById("destination-page").style.transform =
              "translateY(-102%)";
          }
          document.getElementById("destination-page").style.transition = "none";
          document.getElementById("destination-page").style.display = "none";
        }, 1001);

        if (counter % 2 !== 0) {
          document.getElementById("crew-page").style.transform =
            "translateX(102%)";
        } else {
          document.getElementById("crew-page").style.transform =
            "translateX(-102%)";
        }
        document.getElementById("crew-page").style.transition =
          "all 1s ease-in-out";
        setTimeout(() => {
          if (counter % 2 !== 0) {
            document.getElementById("crew-page").style.transform =
              "translateY(102%)";
          } else {
            document.getElementById("crew-page").style.transform =
              "translateY(-102%)";
          }
          document.getElementById("crew-page").style.transition = "none";
          document.getElementById("crew-page").style.display = "none";
        }, 1001);

        if (counter % 2 !== 0) {
          document.getElementById("technology-page").style.transform =
            "translateX(102%)";
        } else {
          document.getElementById("technology-page").style.transform =
            "translateX(-102%)";
        }
        document.getElementById("technology-page").style.transition =
          "all 1s ease-in-out";
        setTimeout(() => {
          if (counter % 2 !== 0) {
            document.getElementById("technology-page").style.transform =
              "translateY(102%)";
          } else {
            document.getElementById("technology-page").style.transform =
              "translateY(-102%)";
          }
          document.getElementById("technology-page").style.transition = "none";
          document.getElementById("technology-page").style.display = "none";
        }, 1001);

        if (i === 0) {
          setTimeout(() => {
            document.getElementById("home-page").style.display = "flex";
            setTimeout(() => {
              document.getElementById("home-page").style.transform =
                "translateX(0%)";
              document.getElementById("home-page").style.transition =
                "all 0.75s ease-in-out";
            }, 48);
          }, 1002);
        } else if (i === 1) {
          setTimeout(() => {
            document.getElementById("destination-page").style.display = "flex";
            setTimeout(() => {
              document.getElementById("destination-page").style.transform =
                "translateX(0%)";
              document.getElementById("destination-page").style.transition =
                "all 0.75s ease-in-out";
            }, 48);
          }, 1002);
        } else if (i === 2) {
          setTimeout(() => {
            document.getElementById("crew-page").style.display = "flex";
            setTimeout(() => {
              document.getElementById("crew-page").style.transform =
                "translateX(0%)";
              document.getElementById("crew-page").style.transition =
                "all 0.75s ease-in-out";
            }, 48);
          }, 1002);
        } else if (i === 3) {
          setTimeout(() => {
            document.getElementById("technology-page").style.display = "flex";
            setTimeout(() => {
              document.getElementById("technology-page").style.transform =
                "translateX(0%)";
              document.getElementById("technology-page").style.transition =
                "all 0.75s ease-in-out";
            }, 48);
          }, 1002);
        }
        setTimeout(() => {
          inProgress = false;
        }, 1801);
      }
    });
  }
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
