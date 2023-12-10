export const exploreBtnListen = () => {
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

export const homeHamburgerBtnListen = (dataJSON) => {
  const hamburgerBtnOpenMenu = document.getElementById("hamburger-btn-open-h");
  const hamburgerBtnCloseMenu = document.getElementById(
    "hamburger-btn-close-h"
  );
  const phoneMenu = document.getElementById("phone-menu-h");

  hamburgerBtnOpenMenu.addEventListener("click", (event) => {
    phoneMenu.classList.remove("phoneMenuHide");
    phoneMenu.classList.add("phoneMenuShow");
  });

  hamburgerBtnCloseMenu.addEventListener("click", (event) => {
    phoneMenu.classList.remove("phoneMenuShow");
    phoneMenu.classList.add("phoneMenuHide");
  });
};
