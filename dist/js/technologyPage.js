export const technologyDotBtnsListen = (dataJSON) => {
  let inProgress = false;

  const buttons = document.querySelectorAll(".technology-page .circle-btn-alt");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
      if (!inProgress) {
        inProgress = true;

        removeButtonHoverListenersFromAllButtons(buttons);
        resetAllButtonsStyle(buttons);

        markSelectedButton(buttons[i]);
        removeButtonHoverEffectClassFromSelectedButton(buttons[i]);
        addButtonHoverListenersToNonSelectedButtons(buttons);

        changeImage(dataJSON, i);
        changeText(dataJSON, i);

        // Onemogućava spam-ovanje button-a;
        // Tranzicija slike i teksta traje 2550ms (+30ms zbog zaštite)
        setTimeout(() => {
          inProgress = false;
        }, 2580);
      }
    });
  }
};

const resetAllButtonsStyle = (buttons) => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("mark-selected-technology-page-btn");
    buttons[i].classList.add("reset-all-technology-page-btns");
  }
};

const markSelectedButton = (selectedButton) => {
  selectedButton.classList.remove("reset-all-technology-page-btns");
  selectedButton.classList.add("mark-selected-technology-page-btn");
};

const removeButtonHoverEffectClassFromSelectedButton = (selectedButton) => {
  selectedButton.classList.remove("hover-effect-technology-page");
};

const addButtonHoverListenersToNonSelectedButtons = (buttons) => {
  for (let i = 0; i < buttons.length; i++) {
    if (
      getComputedStyle(buttons[i]).getPropertyValue("background-color") !==
      "rgb(255, 255, 255)"
    ) {
      buttons[i].addEventListener("mouseover", addHoverEffectToBtn);
      buttons[i].addEventListener("mouseleave", removeHoverEffectFromBtn);
    }
  }
};

const addHoverEffectToBtn = (event) => {
  event.target.classList.add("hover-effect-technology-page");
};

const removeHoverEffectFromBtn = (event) => {
  event.target.classList.remove("hover-effect-technology-page");
  event.target.classList.add("reset-all-technology-page-btns");
};

const removeButtonHoverListenersFromAllButtons = (buttons) => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].removeEventListener("mouseover", addHoverEffectToBtn);
    buttons[i].removeEventListener("mouseleave", removeHoverEffectFromBtn);
  }
};

const changeImage = (dataJSON, index) => {
  const img = document.querySelector(".technology-page .technology-img");
  const imgSource = document.querySelector(
    ".technology-page .technology-img-source"
  );

  // Tranzicija slike van ekrana
  img.style.transition = "ease-in-out all 1.25s";
  img.style.transform = "translateX(104%)";

  setTimeout(() => {
    const deviceScreenWidth1440px = window.matchMedia("(min-width: 1440px)");
    // Ako je screen width <1440px onda prebaci sliku sa desne na levu stranu (van ekrana)
    if (!deviceScreenWidth1440px.matches) {
      img.style.transition = "none";
      img.style.transform = "translateX(-104%)";
    }

    imgSource.setAttribute(
      "srcset",
      dataJSON.technology[index].images.portrait
    );
    img.setAttribute("src", dataJSON.technology[index].images.landscape);
    img.setAttribute("alt", dataJSON.technology[index].name + " image");
  }, 1270);

  // Tranzicija nove slike na ekran
  setTimeout(() => {
    img.style.transition = "ease-in-out all 1.25s";
    img.style.transform = "translateX(0%)";
  }, 1300);
};

const changeText = (dataJSON, index) => {
  terminologyText();
  nameText(dataJSON, index);
  descText(dataJSON, index);
};

const terminologyText = () => {
  const terminologyText = document.querySelector(
    ".technology-page .terminology-text"
  );
  terminologyText.classList.remove("change-text-animation-in");
  terminologyText.classList.add("change-text-animation-out");
  setTimeout(() => {
    terminologyText.classList.remove("change-text-animation-out");
    terminologyText.classList.add("change-text-animation-in");
  }, 1250);

  // Fokusiraj na ovaj tekst zbog screen reader-a (accessibility)
  setTimeout(() => {
    terminologyText.focus();
  }, 2000);
};

const nameText = (dataJSON, index) => {
  const nameText = document.querySelector(".technology-page .name-text");
  nameText.classList.remove("change-text-animation-in");
  nameText.classList.add("change-text-animation-out");
  setTimeout(() => {
    nameText.textContent = dataJSON.technology[index].name.toUpperCase();
    nameText.classList.remove("change-text-animation-out");
    nameText.classList.add("change-text-animation-in");
  }, 1250);
};

const descText = (dataJSON, index) => {
  const descText = document.querySelector(".technology-page .desc-text");
  descText.classList.remove("change-text-animation-in");
  descText.classList.add("change-text-animation-out");
  setTimeout(() => {
    let correctedText = dataJSON.technology[index].description;
    correctedText = correctedText.replaceAll("-", "‑");
    descText.textContent = correctedText;
    descText.classList.remove("change-text-animation-out");
    descText.classList.add("change-text-animation-in");
  }, 1250);
};
