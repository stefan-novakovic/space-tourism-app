export const crewDotBtnsListen = (dataJSON) => {
  let inProgress = false;

  const buttons = document.querySelectorAll(".crew-page .circle-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
      disableButtonsFunctionality(buttons);
      removeButtonHoverListenersForSelectedButton(buttons, i);

      if (!inProgress) {
        inProgress = true;

        resetAllButtonsStyle(buttons);

        markSelectedButton(buttons[i]);
        removeButtonHoverEffectClassFromSelectedButton(buttons[i]);
        addButtonHoverListenersToNonSelectedButtons(buttons, i);

        changeImage(dataJSON, i);
        changeText(dataJSON, i);

        // Fokusiraj na ovaj tekst zbog screen reader-a (accessibility)
        setTimeout(() => {
          document.querySelector(".crew-page .crew-page-title-text").focus();
        }, 2000);

        // Onemogućava spam-ovanje button-a;
        // Tranzicija slike i teksta traje 2750ms (moguce je kliknuti button pre nego što se nova slika i tekst pojave na ekranu)
        setTimeout(() => {
          enableButtonsFunctionality(buttons);
          inProgress = false;
        }, 1525);
      }
    });
  }
};

const disableButtonsFunctionality = (buttons) => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = "true";
  }
};

const enableButtonsFunctionality = (buttons) => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].removeAttribute("disabled");
  }
};

const removeButtonHoverListenersForSelectedButton = (
  buttons,
  selectedButtonIndex
) => {
  // Brisanje hover listenera-a za selektovano dugme
  buttons[selectedButtonIndex].removeEventListener(
    "mouseover",
    mouseOverHoverOpacity
  );
  buttons[selectedButtonIndex].removeEventListener(
    "mouseout",
    mouseOutHoverOpacity
  );
};

const resetAllButtonsStyle = (buttons) => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("mark-selected-crew-page-btn");
    buttons[i].classList.add("reset-all-crew-page-btns");
    buttons[i].style.transition = "ease-in-out opacity 0.75s";
  }
};

const markSelectedButton = (selectedButton) => {
  setTimeout(() => {
    selectedButton.classList.remove("reset-all-crew-page-btns");
    selectedButton.classList.add("mark-selected-crew-page-btn");
  }, 650);
};

const removeButtonHoverEffectClassFromSelectedButton = (selectedButton) => {
  selectedButton.classList.remove("hover-effect-crew-page");
  selectedButton.removeAttribute("value");
};

const addButtonHoverListenersToNonSelectedButtons = (
  buttons,
  selectedButtonIndex
) => {
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] !== buttons[selectedButtonIndex]) {
      buttons[i].addEventListener("mouseover", mouseOverHoverOpacity);
      buttons[i].addEventListener("mouseout", mouseOutHoverOpacity);
    }
  }
};

const mouseOverHoverOpacity = (event) => {
  event.stopPropagation();
  event.target.classList.add("hover-effect-crew-page");
  event.target.value = "hover";
  event.target.style.transition = "0s";
};

const mouseOutHoverOpacity = (event) => {
  event.target.classList.remove("hover-effect-crew-page");
  if (event.target.value === "hover") {
    event.target.removeAttribute("value");
    event.target.style.transition = "0s";
  } else {
    event.target.style.transition = "ease-in-out opacity 0.75s";
  }
  event.target.classList.add("reset-all-crew-page-btns");
};

const changeImage = (dataJSON, index) => {
  const img = document.querySelector(".crew-page .crew-img");

  // Tranzicija slike van ekrana
  img.style.transition = "ease-in-out transform 1.25s";
  img.style.transform = "translateY(102%)";

  setTimeout(() => {
    img.setAttribute("src", dataJSON.crew[index].images.png);
    img.setAttribute("alt", dataJSON.crew[index].name + " image");
    // Tranzicija nove slike na ekran
    img.style.transition = "ease-in-out transform 1.25s";
    img.style.transform = "translateY(0%)";
  }, 1500);
};

const changeText = (dataJSON, index) => {
  crewRoleText(dataJSON, index);
  crewNameText(dataJSON, index);
  crewBioText(dataJSON, index);
};

const crewRoleText = (dataJSON, index) => {
  const crewRoleText = document.querySelector(".crew-page .crew-role-text");
  crewRoleText.classList.remove("change-role-text-animation-in");
  crewRoleText.classList.add("change-text-animation-out");

  setTimeout(() => {
    crewRoleText.textContent = dataJSON.crew[index].role.toUpperCase();
    crewRoleText.classList.remove("change-text-animation-out");
    crewRoleText.classList.add("change-role-text-animation-in");
  }, 1500);
};

const crewNameText = (dataJSON, index) => {
  const crewNameText = document.querySelector(".crew-page .crew-name-text");
  crewNameText.classList.remove("change-name-and-bio-text-animation-in");
  crewNameText.classList.add("change-text-animation-out");

  setTimeout(() => {
    crewNameText.textContent = dataJSON.crew[index].name.toUpperCase();
    crewNameText.classList.remove("change-text-animation-out");
    crewNameText.classList.add("change-name-and-bio-text-animation-in");
  }, 1500);
};

const crewBioText = (dataJSON, index) => {
  const crewBioText = document.querySelector(".crew-page .crew-bio-text");
  crewBioText.classList.remove("change-name-and-bio-text-animation-in");
  crewBioText.classList.add("change-text-animation-out");

  setTimeout(() => {
    let correctedText = dataJSON.crew[index].bio;
    correctedText = correctedText.replaceAll("-", "‑");
    crewBioText.textContent = correctedText;
    crewBioText.classList.remove("change-text-animation-out");
    crewBioText.classList.add("change-name-and-bio-text-animation-in");

    const deviceScreenWidth768px = window.matchMedia("(min-width: 768px)");
    const deviceScreenWidth1440px = window.matchMedia("(min-width: 1440px)");
    const textAndBtnsContainer = document.querySelector(
      ".crew-page .text-and-buttons-container"
    );
    if (deviceScreenWidth768px.matches && !deviceScreenWidth1440px.matches) {
      if (dataJSON.crew[index].name === "Douglas Hurley") {
        textAndBtnsContainer.style.width = "458px";
      } else if (dataJSON.crew[index].name === "Mark Shuttleworth") {
        textAndBtnsContainer.style.width = "520px";
      } else if (dataJSON.crew[index].name === "Anousheh Ansari") {
        textAndBtnsContainer.style.width = "535.7px";
      } else {
        textAndBtnsContainer.style.width = "592px";
      }
    } else if (
      deviceScreenWidth768px.matches &&
      deviceScreenWidth1440px.matches
    ) {
      textAndBtnsContainer.style.width = "auto";
      crewBioText.style.width = "444px";
    }
  }, 1500);
};

export const crewPageOnResize = (dataJSON) => {
  let selectedButtonIndex;

  const buttons = document.querySelectorAll(".crew-page .circle-btn");
  for (let i = 0; i < buttons.length; i++) {
    if (getComputedStyle(buttons[i]).getPropertyValue("opacity") === "1") {
      selectedButtonIndex = i;
    }
  }

  const textAndBtnsContainer = document.querySelector(
    ".crew-page .text-and-buttons-container"
  );
  const crewBioText = document.querySelector(".crew-page .crew-bio-text");

  if (window.innerWidth < 768) {
    textAndBtnsContainer.style.width = "327px";
    crewBioText.style.width = "auto";
  } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    crewBioText.style.width = "auto";
    if (dataJSON.crew[selectedButtonIndex].name === "Douglas Hurley") {
      textAndBtnsContainer.style.width = "458px";
    } else if (
      dataJSON.crew[selectedButtonIndex].name === "Mark Shuttleworth"
    ) {
      textAndBtnsContainer.style.width = "520px";
    } else if (dataJSON.crew[selectedButtonIndex].name === "Anousheh Ansari") {
      textAndBtnsContainer.style.width = "535.7px";
    } else {
      textAndBtnsContainer.style.width = "592px";
    }
  } else if (window.innerWidth >= 1440) {
    textAndBtnsContainer.style.width = "auto";
    crewBioText.style.width = "444px";
  }
};
