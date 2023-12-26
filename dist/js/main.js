import { homeExploreBtnListen } from "./homePage.js";
import {
  destinationMoonsNavListen,
  destinationMoonsNavMenuMarkerPositionSwitchListen,
  destinationMoonsMarkerPositionSwitchOnWindowResize,
  destinationMoonMarkerHover,
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
  markerPositionSwitchOnWindowResize();
  hamburgerBtnListen();

  homeExploreBtnListen();

  destinationMoonMarkerHover();
  destinationMoonsNavListen(dataJSON);
  destinationMoonsNavMenuMarkerPositionSwitchListen();
  destinationMoonsMarkerPositionSwitchOnWindowResize();

  crewDotBtnsListen(dataJSON);
  crewWindowResizeListen(dataJSON);

  technologyDotBtnsListen(dataJSON);
};

const getJSONData = async () => {
  const data = await fetch("data.json");
  const dataJSON = await data.json();
  return dataJSON;
};

let inProgress = false;
let choice = 0;
const navMenuMarkerPositionSwitchListen = () => {
  const listItem = document.querySelectorAll(".header .nav .ul .li");
  const listItemPhone = document.querySelectorAll("main .nav-phone .ul .li");

  for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener("click", (event) => {
      setTimeout(() => {
        if (i === 0) {
          document.querySelector(".home-page .title-regular-text").focus();
        } else if (i === 1) {
          document
            .querySelector(".destination-page .destination-page-title-text")
            .focus();
        } else if (i === 2) {
          document.querySelector(".crew-page .crew-page-title-text").focus();
        } else if (i === 3) {
          document
            .querySelector(".technology-page .technology-page-title-text")
            .focus();
        }
      }, 1500);

      choice = i;
      if (!inProgress) {
        inProgress = true;

        // SELEKTOVANA STRANICA OSTAJE PODVUCENA DOK MARKER NE STIGNE
        listItem[i].classList.add("stay-hovered");
        setTimeout(() => {
          listItem[i].classList.remove("stay-hovered");
        }, 1005);

        markerPositionSwitch(listItem[i], 0);
        pageSwitch(i);
        setTimeout(() => {
          inProgress = false;
        }, 1801);
      }
    });
  }

  for (let i = 0; i < listItemPhone.length; i++) {
    listItemPhone[i].addEventListener("click", (event) => {
      setTimeout(() => {
        const phoneSidebarMenu = document.getElementById("phone-sidebar-menu");
        phoneSidebarMenu.classList.remove("phoneMenuShow");
        phoneSidebarMenu.classList.add("phoneMenuHide");
      }, 275);

      if (!inProgress) {
        inProgress = true;

        pageSwitch(i);
        setTimeout(() => {
          inProgress = false;
        }, 1651);
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

const markerPositionSwitch = (listItem, resizeOrNot) => {
  const marker = document.getElementById("menu-marker");

  if (resizeOrNot === 1) {
    marker.style.transition = "0s";
  } else {
    marker.style.transition = "1s";
  }
  marker.style.left = listItem.offsetLeft + "px";
  marker.style.width = listItem.offsetWidth + "px";
};

const markerPositionSwitchOnWindowResize = () => {
  window.addEventListener("resize", (event) => {
    if (window.innerWidth >= 768) {
      const listItem = document.querySelectorAll(".header .nav .ul .li");
      markerPositionSwitch(listItem[choice], 1);
    }
  });
};

let counter = 0;
const pageSwitch = (index) => {
  const deviceScreenWidth768px = window.matchMedia("(min-width: 768px)");
  counter += 1;

  if (deviceScreenWidth768px.matches) {
    if (counter % 2 !== 0) {
      document.getElementById("home-page").style.transform = "translateX(102%)";
    } else {
      document.getElementById("home-page").style.transform =
        "translateX(-102%)";
    }
  } else {
    document.getElementById("home-page").style.transform = "translateX(-102%)";
  }
  document.getElementById("home-page").style.transition = "all 1s ease-in";
  setTimeout(() => {
    if (deviceScreenWidth768px.matches) {
      if (counter % 2 !== 0) {
        document.getElementById("home-page").style.transform =
          "translateY(102%)";
      } else {
        document.getElementById("home-page").style.transform =
          "translateY(-102%)";
      }
    } else {
      document.getElementById("home-page").style.transform = "translateY(102%)";
    }
    document.getElementById("home-page").style.transition = "none";
    document.getElementById("home-page").style.display = "none";
  }, 1001);

  if (deviceScreenWidth768px.matches) {
    if (counter % 2 !== 0) {
      document.getElementById("destination-page").style.transform =
        "translateX(102%)";
    } else {
      document.getElementById("destination-page").style.transform =
        "translateX(-102%)";
    }
  } else {
    document.getElementById("destination-page").style.transform =
      "translateX(-102%)";
  }
  document.getElementById("destination-page").style.transition =
    "all 1s ease-in";
  setTimeout(() => {
    if (deviceScreenWidth768px.matches) {
      if (counter % 2 !== 0) {
        document.getElementById("destination-page").style.transform =
          "translateY(102%)";
      } else {
        document.getElementById("destination-page").style.transform =
          "translateY(-102%)";
      }
    } else {
      document.getElementById("destination-page").style.transform =
        "translateY(102%)";
    }
    document.getElementById("destination-page").style.transition = "none";
    document.getElementById("destination-page").style.display = "none";
  }, 1001);

  if (deviceScreenWidth768px.matches) {
    if (counter % 2 !== 0) {
      document.getElementById("crew-page").style.transform = "translateX(102%)";
    } else {
      document.getElementById("crew-page").style.transform =
        "translateX(-102%)";
    }
  } else {
    document.getElementById("crew-page").style.transform = "translateX(-102%)";
  }
  document.getElementById("crew-page").style.transition = "all 1s ease-in";
  setTimeout(() => {
    if (deviceScreenWidth768px.matches) {
      if (counter % 2 !== 0) {
        document.getElementById("crew-page").style.transform =
          "translateY(102%)";
      } else {
        document.getElementById("crew-page").style.transform =
          "translateY(-102%)";
      }
    } else {
      document.getElementById("crew-page").style.transform = "translateY(102%)";
    }
    document.getElementById("crew-page").style.transition = "none";
    document.getElementById("crew-page").style.display = "none";
  }, 1001);

  if (deviceScreenWidth768px.matches) {
    if (counter % 2 !== 0) {
      document.getElementById("technology-page").style.transform =
        "translateX(102%)";
    } else {
      document.getElementById("technology-page").style.transform =
        "translateX(-102%)";
    }
  } else {
    document.getElementById("technology-page").style.transform =
      "translateX(-102%)";
  }
  document.getElementById("technology-page").style.transition =
    "all 1s ease-in";
  setTimeout(() => {
    if (deviceScreenWidth768px.matches) {
      if (counter % 2 !== 0) {
        document.getElementById("technology-page").style.transform =
          "translateY(102%)";
      } else {
        document.getElementById("technology-page").style.transform =
          "translateY(-102%)";
      }
    } else {
      document.getElementById("technology-page").style.transform =
        "translateY(102%)";
    }
    document.getElementById("technology-page").style.transition = "none";
    document.getElementById("technology-page").style.display = "none";
  }, 1001);

  if (index === 0) {
    setTimeout(() => {
      document.getElementById("home-page").style.display = "block";
      setTimeout(() => {
        document.getElementById("home-page").style.transform = "translateX(0%)";
        document.getElementById("home-page").style.transition =
          "all 0.6s ease-out";
      }, 48);
    }, 1002);
  } else if (index === 1) {
    setTimeout(() => {
      document.getElementById("destination-page").style.display = "block";
      setTimeout(() => {
        document.getElementById("destination-page").style.transform =
          "translateX(0%)";
        document.getElementById("destination-page").style.transition =
          "all 0.6s ease-out";
      }, 48);
    }, 1002);
  } else if (index === 2) {
    setTimeout(() => {
      document.getElementById("crew-page").style.display = "block";
      setTimeout(() => {
        document.getElementById("crew-page").style.transform = "translateX(0%)";
        document.getElementById("crew-page").style.transition =
          "all 0.6s ease-out";
      }, 48);
    }, 1002);
  } else if (index === 3) {
    setTimeout(() => {
      document.getElementById("technology-page").style.display = "block";
      setTimeout(() => {
        document.getElementById("technology-page").style.transform =
          "translateX(0%)";
        document.getElementById("technology-page").style.transition =
          "all 0.6s ease-out";
      }, 48);
    }, 1002);
  }
};
