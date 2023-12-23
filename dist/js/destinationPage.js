export const destinationHamburgerBtnListen = (dataJSON) => {
  const hamburgerBtnOpenMenu = document.getElementById("hamburger-btn-open-d");
  const hamburgerBtnCloseMenu = document.getElementById(
    "hamburger-btn-close-d"
  );
  const phoneMenu = document.getElementById("phone-menu-d");

  hamburgerBtnOpenMenu.addEventListener("click", (event) => {
    phoneMenu.classList.remove("phoneMenuHide");
    phoneMenu.classList.add("phoneMenuShow");
  });

  hamburgerBtnCloseMenu.addEventListener("click", (event) => {
    phoneMenu.classList.remove("phoneMenuShow");
    phoneMenu.classList.add("phoneMenuHide");
  });
};

export const moonsNavListen = (dataJSON) => {
  let inProgress = false;

  const buttons = document.querySelectorAll(".li__moon");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
      const deviceScreenWidth768px = window.matchMedia("(min-width: 768px)");
      const deviceScreenWidth1440px = window.matchMedia("(min-width: 1440px)");

      if (!inProgress) {
        inProgress = true;

        const img = document.querySelector(".destination-img");
        img.style.transition = "ease-in-out all 1.75s";
        img.style.opacity = "0.25";
        img.style.scale = "0";
        img.style.transform = "rotate(1080deg)";

        setTimeout(() => {
          img.setAttribute("src", dataJSON.destinations[i].images.png);
          img.setAttribute("alt", dataJSON.destinations[i].name + " image");
          img.style.transition = "ease-in-out all 1.75s";
          img.style.opacity = "1";
          img.style.scale = "1";
          img.style.transform = "rotate(0deg)";
        }, 2000);

        // setTimeout(() => {
        //   const destinationPage = document.querySelector(".destination-page");
        //   if (i === 1 || i === 3) {
        //     destinationPage.style.minHeight = "825px";
        //   } else {
        //     destinationPage.style.minHeight = "850px";
        //   }
        // }, 2000);

        const destinationNameText = document.querySelector(
          ".destination-name-text"
        );
        destinationNameText.style.transition = "ease-in-out all 1.75s";
        destinationNameText.style.opacity = "0";
        destinationNameText.style.scale = "0";
        setTimeout(() => {
          destinationNameText.textContent =
            dataJSON.destinations[i].name.toUpperCase();
          destinationNameText.style.opacity = "1";
          destinationNameText.style.scale = "1";
          destinationNameText.style.transition = "ease-in-out all 1.75s";
        }, 2000);

        const destinationDescText = document.querySelector(
          ".destination-desc-text"
        );
        destinationDescText.style.transition = "ease-in-out all 1.75s";
        destinationDescText.style.opacity = "0";
        destinationDescText.style.scale = "0";
        setTimeout(() => {
          destinationDescText.textContent =
            dataJSON.destinations[i].description;
          destinationDescText.style.opacity = "1";
          destinationDescText.style.scale = "1";
          destinationDescText.style.transition = "ease-in-out all 1.75s";
        }, 2000);

        const destinationDividerRect = document.querySelector(
          ".destination-divider-rect"
        );
        destinationDividerRect.style.transition = "ease-in-out all 1.75s";
        destinationDividerRect.style.opacity = "0";
        destinationDividerRect.style.scale = "0";
        setTimeout(() => {
          destinationDividerRect.style.opacity = "1";
          destinationDividerRect.style.scale = "1";
          destinationDividerRect.style.transition = "ease-in-out all 1.75s";
        }, 2000);

        const destinationParameterOneNameText = document.querySelectorAll(
          ".destination-parameter-name-text"
        )[0];
        destinationParameterOneNameText.style.transition =
          "ease-in-out all 1.75s";
        destinationParameterOneNameText.style.opacity = "0";
        destinationParameterOneNameText.style.scale = "0";
        setTimeout(() => {
          destinationParameterOneNameText.style.opacity = "1";
          destinationParameterOneNameText.style.scale = "1";
          destinationParameterOneNameText.style.transition =
            "ease-in-out all 1.75s";
        }, 2000);

        const destinationParameterOneNameValueText = document.querySelectorAll(
          ".destination-parameter-name-value-text"
        )[0];
        destinationParameterOneNameValueText.style.transition =
          "ease-in-out all 1.75s";
        destinationParameterOneNameValueText.style.opacity = "0";
        destinationParameterOneNameValueText.style.scale = "0";
        setTimeout(() => {
          destinationParameterOneNameValueText.textContent =
            dataJSON.destinations[i].distance.toUpperCase();
          destinationParameterOneNameValueText.style.opacity = "1";
          destinationParameterOneNameValueText.style.scale = "1";
          destinationParameterOneNameValueText.style.transition =
            "ease-in-out all 1.75s";
        }, 2000);

        const destinationParameterTwoNameText = document.querySelectorAll(
          ".destination-parameter-name-text"
        )[1];
        destinationParameterTwoNameText.style.transition =
          "ease-in-out all 1.75s";
        destinationParameterTwoNameText.style.opacity = "0";
        destinationParameterTwoNameText.style.scale = "0";
        setTimeout(() => {
          destinationParameterTwoNameText.style.opacity = "1";
          destinationParameterTwoNameText.style.scale = "1";
          destinationParameterTwoNameText.style.transition =
            "ease-in-out all 1.75s";
        }, 2000);

        const destinationParameterTwoNameValueText = document.querySelectorAll(
          ".destination-parameter-name-value-text"
        )[1];
        destinationParameterTwoNameValueText.style.transition =
          "ease-in-out all 1.75s";
        destinationParameterTwoNameValueText.style.opacity = "0";
        destinationParameterTwoNameValueText.style.scale = "0";
        setTimeout(() => {
          destinationParameterTwoNameValueText.textContent =
            dataJSON.destinations[i].travel.toUpperCase();
          destinationParameterTwoNameValueText.style.opacity = "1";
          destinationParameterTwoNameValueText.style.scale = "1";
          destinationParameterTwoNameValueText.style.transition =
            "ease-in-out all 1.75s";
        }, 2000);

        setTimeout(() => {
          inProgress = false;
        }, 2005);
      }
    });
  }
};

export const moonsNavMenuMarkerPositionSwitchListen = () => {
  const moonsMarker = document.getElementById("moons-marker");
  const listItem = document.querySelectorAll(".moons-nav .ul .li");

  listItem.forEach((link) => {
    link.addEventListener("click", (event) => {
      moonsMarker.style.left = link.offsetLeft + "px";
      moonsMarker.style.width = link.offsetWidth + "px";
    });
  });
};
