export const crewHamburgerBtnListen = (dataJSON) => {
  const hamburgerBtnOpenMenu = document.getElementById("hamburger-btn-open-c");
  const hamburgerBtnCloseMenu = document.getElementById(
    "hamburger-btn-close-c"
  );
  const phoneMenu = document.getElementById("phone-menu-c");

  hamburgerBtnOpenMenu.addEventListener("click", (event) => {
    phoneMenu.classList.remove("phoneMenuHide");
    phoneMenu.classList.add("phoneMenuShow");
  });

  hamburgerBtnCloseMenu.addEventListener("click", (event) => {
    phoneMenu.classList.remove("phoneMenuShow");
    phoneMenu.classList.add("phoneMenuHide");
  });
};
