export const destinationMoonsNavListen = (dataJSON) => {
  let inProgress = false;

  const buttons = document.querySelectorAll(".destination-page .li__moon");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
      if (!inProgress) {
        inProgress = true;

        const moonsMenuHoverMarker = document.getElementById(
          "moons-menu-hover-marker"
        );
        moonsMenuHoverMarker.style.display = "none";

        const img = document.querySelector(
          ".destination-page .destination-img"
        );
        img.style.transition = "ease-in-out all 1.75s";
        img.style.opacity = "0.25";
        img.style.scale = "0";
        img.style.transform = "rotate(1080deg)";
        img.style.filter = "blur(2px)";
        img.style.filter = "brightness(0%)";
        img.style.filter = "grayscale(1)";

        setTimeout(() => {
          img.setAttribute("src", dataJSON.destinations[i].images.png);
          img.setAttribute("alt", dataJSON.destinations[i].name + " image");
          img.style.transition = "ease-in-out all 1.75s";
          img.style.opacity = "1";
          img.style.scale = "1";
          img.style.transform = "rotate(0deg)";
          img.style.filter = "blur(0px)";
          img.style.filter = "brightness(100%)";
          img.style.filter = "grayscale(0)";
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
          ".destination-page .destination-name-text"
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
          setTimeout(() => {
            destinationNameText.focus();
          }, 750);
        }, 2000);

        const destinationDescText = document.querySelector(
          ".destination-page .destination-desc-text"
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
          ".destination-page .destination-divider-rect"
        );
        destinationDividerRect.style.transition = "ease-in-out all 1.75s";
        destinationDividerRect.style.opacity = "0";
        destinationDividerRect.style.scale = "0";
        setTimeout(() => {
          destinationDividerRect.style.opacity = "1";
          destinationDividerRect.style.scale = "1";
          destinationDividerRect.style.transition = "ease-in-out all 1.75s";
        }, 2000);

        const destinationAvgDistanceText = document.querySelector(
          ".destination-page .avg-distance .destination-parameter-name-text"
        );
        destinationAvgDistanceText.style.transition = "ease-in-out all 1.75s";
        destinationAvgDistanceText.style.opacity = "0";
        destinationAvgDistanceText.style.scale = "0";
        setTimeout(() => {
          destinationAvgDistanceText.style.opacity = "1";
          destinationAvgDistanceText.style.scale = "1";
          destinationAvgDistanceText.style.transition = "ease-in-out all 1.75s";
        }, 2000);

        const destinationAvgDistanceValueText = document.querySelector(
          ".destination-page .avg-distance .destination-parameter-name-value-text"
        );
        destinationAvgDistanceValueText.style.transition =
          "ease-in-out all 1.75s";
        destinationAvgDistanceValueText.style.opacity = "0";
        destinationAvgDistanceValueText.style.scale = "0";
        setTimeout(() => {
          destinationAvgDistanceValueText.textContent =
            dataJSON.destinations[i].distance.toUpperCase();
          destinationAvgDistanceValueText.style.opacity = "1";
          destinationAvgDistanceValueText.style.scale = "1";
          destinationAvgDistanceValueText.style.transition =
            "ease-in-out all 1.75s";
        }, 2000);

        const destinationEstTravelTimeText = document.querySelector(
          ".destination-page .est-travel-time .destination-parameter-name-text"
        );
        destinationEstTravelTimeText.style.transition = "ease-in-out all 1.75s";
        destinationEstTravelTimeText.style.opacity = "0";
        destinationEstTravelTimeText.style.scale = "0";
        setTimeout(() => {
          destinationEstTravelTimeText.style.opacity = "1";
          destinationEstTravelTimeText.style.scale = "1";
          destinationEstTravelTimeText.style.transition =
            "ease-in-out all 1.75s";
        }, 2000);

        const destinationEstTravelTimeValueText = document.querySelector(
          ".destination-page .est-travel-time .destination-parameter-name-value-text"
        );
        destinationEstTravelTimeValueText.style.transition =
          "ease-in-out all 1.75s";
        destinationEstTravelTimeValueText.style.opacity = "0";
        destinationEstTravelTimeValueText.style.scale = "0";
        setTimeout(() => {
          destinationEstTravelTimeValueText.textContent =
            dataJSON.destinations[i].travel.toUpperCase();
          destinationEstTravelTimeValueText.style.opacity = "1";
          destinationEstTravelTimeValueText.style.scale = "1";
          destinationEstTravelTimeValueText.style.transition =
            "ease-in-out all 1.75s";
        }, 2000);

        setTimeout(() => {
          inProgress = false;
        }, 2005);
      }
    });
  }
};

let inProgressMoonsNavMenuMarker = false;
let choice = 0;
export const destinationMoonsNavMenuMarkerPositionSwitchListen = () => {
  const listItem = document.querySelectorAll(
    ".destination-page .moons-nav .ul .li"
  );

  for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener("click", (event) => {
      choice = i;
      if (!inProgressMoonsNavMenuMarker) {
        inProgressMoonsNavMenuMarker = true;

        markerPositionSwitch(listItem[i], 0);

        setTimeout(() => {
          inProgressMoonsNavMenuMarker = false;
        }, 2005);
      }
    });
  }
};

export const destinationMoonMarkerHover = () => {
  const moonsMenuHoverMarker = document.getElementById(
    "moons-menu-hover-marker"
  );

  const deviceScreenWidth1440px = window.matchMedia("(min-width: 1440px)");

  const listItem = document.querySelectorAll(
    ".destination-page .moons-nav .ul .li"
  );

  for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener("mouseover", (event) => {
      if (deviceScreenWidth1440px.matches) {
        moonsMenuHoverMarker.style.display = "block";

        if (listItem[i].firstChild.nextSibling.textContent === "MOON") {
          moonsMenuHoverMarker.style.left = "0px";
          moonsMenuHoverMarker.style.width = "41px";
        } else if (listItem[i].firstChild.nextSibling.textContent === "MARS") {
          moonsMenuHoverMarker.style.left =
            listItem[i].offsetLeft - 22.5 + listItem[i].offsetWidth / 2 + "px";
          moonsMenuHoverMarker.style.width = "41px";
        } else if (
          listItem[i].firstChild.nextSibling.textContent === "EUROPA"
        ) {
          moonsMenuHoverMarker.style.left =
            listItem[i].offsetLeft - 29 + listItem[i].offsetWidth / 2 + "px";
          moonsMenuHoverMarker.style.width = "56px";
        } else if (listItem[i].firstChild.nextSibling.textContent === "TITAN") {
          moonsMenuHoverMarker.style.left = "239.5px";
          moonsMenuHoverMarker.style.width = "43px";
        }
      } else {
        moonsMenuHoverMarker.style.display = "none";
      }
    });

    listItem[i].addEventListener("mouseout", (event) => {
      moonsMenuHoverMarker.style.display = "none";
    });
  }
};

const markerPositionSwitch = (listItem, resizeOrNot) => {
  const moonsMenuMarker = document.getElementById("moons-menu-marker");

  const deviceScreenWidth768px = window.matchMedia("(min-width: 768px)");

  if (resizeOrNot === 1) {
    moonsMenuMarker.style.transition = "0s";
  } else {
    moonsMenuMarker.style.transition = "1s";
  }

  if (!deviceScreenWidth768px.matches) {
    moonsMenuMarker.style.width = "36px";
    if (listItem.firstChild.nextSibling.textContent === "MOON") {
      moonsMenuMarker.style.left = "0px";
    } else if (listItem.firstChild.nextSibling.textContent === "TITAN") {
      moonsMenuMarker.style.left = "201.5px";
    } else {
      moonsMenuMarker.style.left =
        listItem.offsetLeft - 18 + listItem.offsetWidth / 2 + "px";
    }
  } else {
    if (listItem.firstChild.nextSibling.textContent === "MOON") {
      moonsMenuMarker.style.left = "0px";
      moonsMenuMarker.style.width = "41px";
    } else if (listItem.firstChild.nextSibling.textContent === "MARS") {
      moonsMenuMarker.style.left =
        listItem.offsetLeft - 22.5 + listItem.offsetWidth / 2 + "px";
      moonsMenuMarker.style.width = "41px";
    } else if (listItem.firstChild.nextSibling.textContent === "EUROPA") {
      moonsMenuMarker.style.left =
        listItem.offsetLeft - 29 + listItem.offsetWidth / 2 + "px";
      moonsMenuMarker.style.width = "56px";
    } else if (listItem.firstChild.nextSibling.textContent === "TITAN") {
      moonsMenuMarker.style.left = "239.5px";
      moonsMenuMarker.style.width = "43px";
    }
  }
};

export const destinationMoonsMarkerPositionSwitchOnWindowResize = () => {
  window.addEventListener("resize", (event) => {
    const listItem = document.querySelectorAll(
      ".destination-page .moons-nav .ul .li"
    );
    markerPositionSwitch(listItem[choice], 1);

    destinationMoonMarkerHover();
  });
};
