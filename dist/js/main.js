import { HPExploreBtnListen } from "./homePage.js";
import {
  DPMoonsNavSelectionListen,
  DPMoonsNavSelectionMarkerPositionListen,
  DPMoonsNavHoverMarkerListen,
} from "./destinationPage.js";
import { CPDotBtnsListen, CPOnWindowResize } from "./crewPage.js";
import { TPDotBtnsListen } from "./technologyPage.js";

const initApp = () => {
  console.log("DOM Content Loaded!");
  startApp();
};

document.addEventListener("DOMContentLoaded", initApp);

const startApp = async () => {
  const dataJSON = await getJSONData();

  mainNavSelectionListen();
  selectionMarkerPositionSwitchOnWindowResize();

  hamburgerBtnOpenCloseListen();
  phoneNavSelectionListen();
  selectionMarkerPhonePositionSwitchOnWindowResize();

  HPExploreBtnListen();

  DPMoonsNavHoverMarkerListen();
  DPMoonsNavSelectionMarkerPositionListen();
  DPMoonsNavSelectionListen(dataJSON);

  CPDotBtnsListen(dataJSON);
  CPOnWindowResize(dataJSON);

  TPDotBtnsListen(dataJSON);
};

const getJSONData = async () => {
  const data = await fetch("db/data.json");
  const dataJSON = await data.json();
  return dataJSON;
};

let choice = 0;
const mainNavSelectionListen = () => {
  let inProgress = false;

  const listItems = document.querySelectorAll(".header .nav .ul .li");
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", (event) => {
      if (i !== choice) {
        if (!inProgress) {
          inProgress = true;

          choice = i;

          hoverMarkerStick(listItems[i]);
          selectionMarkerPositionSwitch(listItems[i], "screenResizeNo");
          pageSwitch(i);

          setTimeout(() => {
            inProgress = false;
          }, 1801);
        }
      }
    });
  }
};

let choicePhone = 0;
const phoneNavSelectionListen = () => {
  let inProgressPhone = false;

  const listItemsPhone = document.querySelectorAll("main .nav-phone .ul .li");
  for (let i = 0; i < listItemsPhone.length; i++) {
    listItemsPhone[i].addEventListener("click", (event) => {
      if (i !== choicePhone) {
        if (!inProgressPhone) {
          inProgressPhone = true;
          choicePhone = i;

          selectionMarkerPhonePositionSwitch(listItemsPhone[i]);
          closePhoneSidebarMenu();
          pageSwitch(i);

          setTimeout(() => {
            inProgressPhone = false;
          }, 1651);
        }
      }
    });
  }
};

const hoverMarkerStick = (listItem) => {
  // Na selektovanoj stranici ostaje hover marker, sve dok marker za selekciju ne stigne
  // Markeru za selekciju treba 1s da bi stigao (+ 5ms dodato u timeout delay-u)
  listItem.classList.add("hover-stick");
  setTimeout(() => {
    listItem.classList.remove("hover-stick");
  }, 1005);
};

const selectionMarkerPositionSwitch = (listItem, resizeOrNot) => {
  const selectionMarker = document.getElementById("menu-selected-marker");

  if (resizeOrNot === "screenResizeYes") {
    selectionMarker.style.transition = "0s";
  } else {
    selectionMarker.style.transition = "1s";
  }

  selectionMarker.style.left = listItem.offsetLeft + "px";
  selectionMarker.style.width = listItem.offsetWidth + "px";
};

let oldWidthPhone = window.matchMedia("(max-width: 767px)").matches;
let oldWidthTablet = window.matchMedia("(min-width: 768px)").matches;
let oldWidthDesktop = window.matchMedia("(min-width: 1440px)").matches;
const selectionMarkerPositionSwitchOnWindowResize = () => {
  window.addEventListener("resize", (event) => {
    let newWidthPhone = window.matchMedia("(max-width: 767px)").matches;
    let newWidthTablet = window.matchMedia("(min-width: 768px)").matches;
    let newWidthDesktop = window.matchMedia("(min-width: 1440px)").matches;

    const listItem = document.querySelectorAll(".header .nav .ul .li");
    if (newWidthPhone && !newWidthTablet) {
      if (oldWidthPhone && !oldWidthTablet) {
        selectionMarkerPositionSwitch(listItem[choicePhone], "screenResizeYes");
        choice = choicePhone;
      } else if (!oldWidthPhone && oldWidthTablet && !oldWidthDesktop) {
        selectionMarkerPositionSwitch(listItem[choice], "screenResizeYes");
        choicePhone = choice;
      } else if (!oldWidthPhone && oldWidthTablet && oldWidthDesktop) {
        selectionMarkerPositionSwitch(listItem[choice], "screenResizeYes");
        choicePhone = choice;
      }
    } else if (!newWidthPhone && newWidthTablet && !newWidthDesktop) {
      if (oldWidthPhone && !oldWidthTablet) {
        selectionMarkerPositionSwitch(listItem[choicePhone], "screenResizeYes");
        choice = choicePhone;
      } else if (!oldWidthPhone && oldWidthTablet && !oldWidthDesktop) {
        selectionMarkerPositionSwitch(listItem[choice], "screenResizeYes");
        choicePhone = choice;
      } else if (!oldWidthPhone && oldWidthTablet && oldWidthDesktop) {
        selectionMarkerPositionSwitch(listItem[choice], "screenResizeYes");
        choicePhone = choice;
      }
    } else if (!newWidthPhone && newWidthTablet && newWidthDesktop) {
      if (oldWidthPhone && !oldWidthTablet) {
        selectionMarkerPositionSwitch(listItem[choicePhone], "screenResizeYes");
        choice = choicePhone;
      } else if (!oldWidthPhone && oldWidthTablet && !oldWidthDesktop) {
        selectionMarkerPositionSwitch(listItem[choice], "screenResizeYes");
        choicePhone = choice;
      } else if (!oldWidthPhone && oldWidthTablet && oldWidthDesktop) {
        selectionMarkerPositionSwitch(listItem[choice], "screenResizeYes");
        choicePhone = choice;
      }
    }

    setTimeout(() => {
      oldWidthPhone = newWidthPhone;
      oldWidthTablet = newWidthTablet;
      oldWidthDesktop = newWidthDesktop;
    }, 50);
  });
};

let counter = 0;
const pageSwitch = (choiceIndex) => {
  counter += 1;

  const homePage = document.getElementById("home-page");
  const destinationPage = document.getElementById("destination-page");
  const crewPage = document.getElementById("crew-page");
  const technologyPage = document.getElementById("technology-page");
  const pagesArray = [homePage, destinationPage, crewPage, technologyPage];

  const deviceScreenWidth768px = window.matchMedia("(min-width: 768px)");
  for (let i = 0; i < pagesArray.length; i++) {
    if (deviceScreenWidth768px.matches) {
      if (counter % 2 !== 0) {
        animationOutRight(pagesArray[i]);
      } else {
        animationOutLeft(pagesArray[i]);
      }
    } else {
      animationOutLeft(pagesArray[i]);
    }

    setTimeout(() => {
      if (deviceScreenWidth768px.matches) {
        if (counter % 2 !== 0) {
          changePagePositionBelowScreen(pagesArray[i]);
        } else {
          changePagePositionAboveScreen(pagesArray[i]);
        }
      } else {
        changePagePositionBelowScreen(pagesArray[i]);
      }
    }, 1001);
  }

  if (choiceIndex === 0) {
    setTimeout(() => {
      homePage.style.display = "flex";
      setTimeout(() => {
        animationIn(homePage);
      }, 48);
    }, 1002);
  } else if (choiceIndex === 1) {
    setTimeout(() => {
      destinationPage.style.display = "flex";
      setTimeout(() => {
        animationIn(destinationPage);
      }, 48);
    }, 1002);
  } else if (choiceIndex === 2) {
    setTimeout(() => {
      crewPage.style.display = "flex";
      setTimeout(() => {
        animationIn(crewPage);
      }, 48);
    }, 1002);
  } else if (choiceIndex === 3) {
    setTimeout(() => {
      technologyPage.style.display = "flex";
      setTimeout(() => {
        animationIn(technologyPage);
      }, 48);
    }, 1002);
  }
};

const hamburgerBtnOpenCloseListen = () => {
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

const closePhoneSidebarMenu = () => {
  setTimeout(() => {
    const phoneSidebarMenu = document.getElementById("phone-sidebar-menu");
    phoneSidebarMenu.classList.remove("phoneMenuShow");
    phoneSidebarMenu.classList.add("phoneMenuHide");
  }, 275);
};

const selectionMarkerPhonePositionSwitch = (listItem) => {
  const selectionMarkerPhone = document.getElementById(
    "menu-phone-selected-marker"
  );

  selectionMarkerPhone.style.transition = "0s";
  selectionMarkerPhone.style.top = listItem.offsetTop - 6 + "px";
};

const selectionMarkerPhonePositionSwitchOnWindowResize = () => {
  window.addEventListener("resize", (event) => {
    let newWidthPhone = window.matchMedia("(max-width: 767px)").matches;
    let newWidthTablet = window.matchMedia("(min-width: 768px)").matches;
    let newWidthDesktop = window.matchMedia("(min-width: 1440px)").matches;

    const listItem = document.querySelectorAll(
      ".phone-sidebar-menu .nav-phone .ul .li"
    );
    if (newWidthPhone && !newWidthTablet) {
      if (oldWidthPhone && !oldWidthTablet) {
        selectionMarkerPhonePositionSwitch(listItem[choicePhone]);
        choice = choicePhone;
      } else if (!oldWidthPhone && oldWidthTablet && !oldWidthDesktop) {
        selectionMarkerPhonePositionSwitch(listItem[choice]);
        choicePhone = choice;
      } else if (!oldWidthPhone && oldWidthTablet && oldWidthDesktop) {
        selectionMarkerPhonePositionSwitch(listItem[choice]);
        choicePhone = choice;
      }
    } else if (!newWidthPhone && newWidthTablet && !newWidthDesktop) {
      if (oldWidthPhone && !oldWidthTablet) {
        selectionMarkerPhonePositionSwitch(listItem[choicePhone]);
        choice = choicePhone;
      } else if (!oldWidthPhone && oldWidthTablet && !oldWidthDesktop) {
        selectionMarkerPhonePositionSwitch(listItem[choice]);
        choicePhone = choice;
      } else if (!oldWidthPhone && oldWidthTablet && oldWidthDesktop) {
        selectionMarkerPhonePositionSwitch(listItem[choice]);
        choicePhone = choice;
      }
    } else if (!newWidthPhone && newWidthTablet && newWidthDesktop) {
      if (oldWidthPhone && !oldWidthTablet) {
        selectionMarkerPhonePositionSwitch(listItem[choicePhone]);
        choice = choicePhone;
      } else if (!oldWidthPhone && oldWidthTablet && !oldWidthDesktop) {
        selectionMarkerPhonePositionSwitch(listItem[choice]);
        choicePhone = choice;
      } else if (!oldWidthPhone && oldWidthTablet && oldWidthDesktop) {
        selectionMarkerPhonePositionSwitch(listItem[choice]);
        choicePhone = choice;
      }
    }

    setTimeout(() => {
      oldWidthPhone = newWidthPhone;
      oldWidthTablet = newWidthTablet;
      oldWidthDesktop = newWidthDesktop;
    }, 50);
  });
};

const animationOutRight = (page) => {
  page.style.transform = "translateX(102%)";
  page.style.transition = "all 1s ease-in";
};

const animationOutLeft = (page) => {
  page.style.transform = "translateX(-102%)";
  page.style.transition = "all 1s ease-in";
};

const changePagePositionBelowScreen = (page) => {
  page.style.transform = "translateY(102%)";
  page.style.transition = "none";
  page.style.display = "none";
};

const changePagePositionAboveScreen = (page) => {
  page.style.transform = "translateY(-102%)";
  page.style.transition = "none";
  page.style.display = "none";
};

const animationIn = (page) => {
  page.style.transform = "translateX(0%)";
  page.style.transition = "all 0.6s ease-out";
};
