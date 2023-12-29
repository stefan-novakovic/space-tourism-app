let choiceMoon = 0;
export const DPMoonsNavSelectionListen = (dataJSON) => {
  let inProgress = false;

  const navLinks = document.querySelectorAll(".destination-page .li__moon");
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", (event) => {
      if (i !== choiceMoon) {
        if (!inProgress) {
          inProgress = true;

          choiceMoon = i;

          // Klikom na link iz nav bar-a sklanja se hover marker ispod tog link-a
          hideMoonsNavHoverMarker();

          changeImage(dataJSON, i);
          changeText(dataJSON, i);

          // VIDI KOLIKO TREBA DA BUDE
          setTimeout(() => {
            inProgress = false;
          }, 2005);
        }
      }
    });
  }
};

const hideMoonsNavHoverMarker = () => {
  const moonsMenuHoverMarker = document.getElementById(
    "moons-menu-hover-marker"
  );
  moonsMenuHoverMarker.style.display = "none";
};

const changeImage = (dataJSON, index) => {
  const img = document.querySelector(".destination-page .destination-img");
  img.classList.remove("destination-img-animation-in");
  img.classList.add("destination-img-animation-out");

  setTimeout(() => {
    img.setAttribute("src", dataJSON.destinations[index].images.png);
    img.setAttribute("alt", dataJSON.destinations[index].name + " image");
    img.classList.remove("destination-img-animation-out");
    img.classList.add("destination-img-animation-in");
  }, 2000);
};

const changeText = (dataJSON, index) => {
  destinationName(dataJSON, index);
  destinationDesc(dataJSON, index);
  destinationDividerRect();
  destinationAvgDistanceLabel();
  destinationAvgDistanceValue(dataJSON, index);
  destinationEstTravelTimeLabel();
  destinationEstTravelTimeValue(dataJSON, index);
};

const destinationName = (dataJSON, index) => {
  const destinationNameText = document.querySelector(
    ".destination-page .destination-name-text"
  );
  destinationNameText.classList.remove("change-text-animation-in");
  destinationNameText.classList.add("change-text-animation-out");
  setTimeout(() => {
    destinationNameText.textContent =
      dataJSON.destinations[index].name.toUpperCase();
    destinationNameText.classList.remove("change-text-animation-out");
    destinationNameText.classList.add("change-text-animation-in");
  }, 2000);

  // Fokusiraj na ovaj tekst zbog screen reader-a (accessibility)
  setTimeout(() => {
    destinationNameText.focus();
  }, 3000);
};

const destinationDesc = (dataJSON, index) => {
  const destinationDescText = document.querySelector(
    ".destination-page .destination-desc-text"
  );
  destinationDescText.classList.remove("change-text-animation-in");
  destinationDescText.classList.add("change-text-animation-out");
  setTimeout(() => {
    destinationDescText.textContent = dataJSON.destinations[index].description;
    destinationDescText.classList.remove("change-text-animation-out");
    destinationDescText.classList.add("change-text-animation-in");
  }, 2000);
};

const destinationDividerRect = () => {
  const destinationDividerRect = document.querySelector(
    ".destination-page .destination-divider-rect"
  );
  destinationDividerRect.classList.remove("change-text-animation-in");
  destinationDividerRect.classList.add("change-text-animation-out");
  setTimeout(() => {
    destinationDividerRect.classList.remove("change-text-animation-out");
    destinationDividerRect.classList.add("change-text-animation-in");
  }, 2000);
};

const destinationAvgDistanceLabel = () => {
  const destinationAvgDistanceText = document.querySelector(
    ".destination-page .avg-distance .destination-parameter-name-text"
  );
  destinationAvgDistanceText.classList.remove("change-text-animation-in");
  destinationAvgDistanceText.classList.add("change-text-animation-out");
  setTimeout(() => {
    destinationAvgDistanceText.classList.remove("change-text-animation-out");
    destinationAvgDistanceText.classList.add("change-text-animation-in");
  }, 2000);
};

const destinationAvgDistanceValue = (dataJSON, index) => {
  const destinationAvgDistanceValueText = document.querySelector(
    ".destination-page .avg-distance .destination-parameter-name-value-text"
  );
  destinationAvgDistanceValueText.classList.remove("change-text-animation-in");
  destinationAvgDistanceValueText.classList.add("change-text-animation-out");
  setTimeout(() => {
    destinationAvgDistanceValueText.textContent =
      dataJSON.destinations[index].distance.toUpperCase();
    destinationAvgDistanceValueText.classList.remove(
      "change-text-animation-out"
    );
    destinationAvgDistanceValueText.classList.add("change-text-animation-in");
  }, 2000);
};

const destinationEstTravelTimeLabel = () => {
  const destinationEstTravelTimeText = document.querySelector(
    ".destination-page .est-travel-time .destination-parameter-name-text"
  );
  destinationEstTravelTimeText.classList.remove("change-text-animation-in");
  destinationEstTravelTimeText.classList.add("change-text-animation-out");
  setTimeout(() => {
    destinationEstTravelTimeText.classList.remove("change-text-animation-out");
    destinationEstTravelTimeText.classList.add("change-text-animation-in");
  }, 2000);
};

const destinationEstTravelTimeValue = (dataJSON, index) => {
  const destinationEstTravelTimeValueText = document.querySelector(
    ".destination-page .est-travel-time .destination-parameter-name-value-text"
  );
  destinationEstTravelTimeValueText.classList.remove(
    "change-text-animation-in"
  );
  destinationEstTravelTimeValueText.classList.add("change-text-animation-out");
  setTimeout(() => {
    destinationEstTravelTimeValueText.textContent =
      dataJSON.destinations[index].travel.toUpperCase();
    destinationEstTravelTimeValueText.classList.remove(
      "change-text-animation-out"
    );
    destinationEstTravelTimeValueText.classList.add("change-text-animation-in");
  }, 2000);
};

let choice = 0;
export const DPMoonsNavSelectionMarkerPositionListen = () => {
  const listItems = document.querySelectorAll(
    ".destination-page .moons-nav .ul .li"
  );

  let inProgress = false;
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", (event) => {
      if (i !== choice) {
        if (!inProgress) {
          choice = i;
          inProgress = true;

          markerPositionSwitch(listItems[choice], "screenResizeNo");

          // VIDI KOLIKO TREBA DA BUDE
          setTimeout(() => {
            inProgress = false;
          }, 2005);
        }
      }
    });
  }
};

const markerPositionSwitch = (listItem, resizeOrNot) => {
  const moonsMenuMarker = document.getElementById("moons-menu-selected-marker");

  if (resizeOrNot === "screenResizeYes") {
    moonsMenuMarker.style.transition = "0s";
  } else {
    moonsMenuMarker.style.transition = "1s";
  }

  const listItemText = listItem.textContent.trim();
  const deviceScreenWidth768px = window.matchMedia("(min-width: 768px)");
  if (!deviceScreenWidth768px.matches) {
    moonsMenuMarker.style.width = "36px";
    if (listItemText === "MOON") {
      moonsMenuMarker.style.left = "0px";
    } else if (listItemText === "TITAN") {
      moonsMenuMarker.style.left = "201.5px";
    } else {
      moonsMenuMarker.style.left =
        listItem.offsetLeft - 18 + listItem.offsetWidth / 2 + "px";
    }
  } else {
    if (listItemText === "MOON") {
      moonsMenuMarker.style.left = "0px";
      moonsMenuMarker.style.width = "41px";
    } else if (listItemText === "MARS") {
      moonsMenuMarker.style.left =
        listItem.offsetLeft - 22.5 + listItem.offsetWidth / 2 + "px";
      moonsMenuMarker.style.width = "41px";
    } else if (listItemText === "EUROPA") {
      moonsMenuMarker.style.left =
        listItem.offsetLeft - 29 + listItem.offsetWidth / 2 + "px";
      moonsMenuMarker.style.width = "56px";
    } else if (listItemText === "TITAN") {
      moonsMenuMarker.style.left = "239.5px";
      moonsMenuMarker.style.width = "43px";
    }
  }
};

const destinationMoonsNavSelectionMarkerPositionSwitchOnWindowResize = () => {
  window.addEventListener("resize", (event) => {
    const listItems = document.querySelectorAll(
      ".destination-page .moons-nav .ul .li"
    );

    markerPositionSwitch(listItems[choice], "screenResizeYes");
    hideMoonsNavHoverMarker();
  });
};

export const DPMoonsNavHoverMarkerListen = () => {
  const moonsMenuHoverMarker = document.getElementById(
    "moons-menu-hover-marker"
  );

  const listItems = document.querySelectorAll(
    ".destination-page .moons-nav .ul .li"
  );

  const deviceScreenWidth1440px = window.matchMedia("(min-width: 1440px)");
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("mouseover", (event) => {
      if (deviceScreenWidth1440px.matches) {
        const listItemText = listItems[i].textContent.trim();
        moonsMenuHoverMarker.style.display = "block";

        if (listItemText === "MOON") {
          moonsMenuHoverMarker.style.left = "0px";
          moonsMenuHoverMarker.style.width = "41px";
        } else if (listItemText === "MARS") {
          moonsMenuHoverMarker.style.left =
            listItems[i].offsetLeft -
            22.5 +
            listItems[i].offsetWidth / 2 +
            "px";
          moonsMenuHoverMarker.style.width = "41px";
        } else if (listItemText === "EUROPA") {
          moonsMenuHoverMarker.style.left =
            listItems[i].offsetLeft - 29 + listItems[i].offsetWidth / 2 + "px";
          moonsMenuHoverMarker.style.width = "56px";
        } else if (listItemText === "TITAN") {
          moonsMenuHoverMarker.style.left = "239.5px";
          moonsMenuHoverMarker.style.width = "43px";
        }
      } else {
        moonsMenuHoverMarker.style.display = "none";
      }
    });

    listItems[i].addEventListener("mouseout", (event) => {
      moonsMenuHoverMarker.style.display = "none";
    });
  }
};

destinationMoonsNavSelectionMarkerPositionSwitchOnWindowResize();
