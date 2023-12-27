export const technologyDotBtnsListen = (dataJSON) => {
  let inProgress = false;

  const buttons = document.querySelectorAll(".technology-page .circle-btn-alt");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
      if (!inProgress) {
        inProgress = true;

        removeButtonHoverListeners(buttons);
        resetAllButtonsStyle(buttons);
        markSelectedButton(buttons[i]);
        addButtonHoverListeners(buttons);

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
    buttons[i].classList.remove("mark-selected-btn");
    buttons[i].classList.add("reset-all-btns");
  }
};

const markSelectedButton = (selectedButton) => {
  selectedButton.classList.remove("reset-all-btns");
  selectedButton.classList.add("mark-selected-btn");
};
const addButtonHoverListeners = (buttons) => {
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
  event.target.classList.add("hover-effect");
};

const removeHoverEffectFromBtn = (event) => {
  event.target.classList.remove("hover-effect");
  event.target.classList.add("reset-all-btns");
};

const removeButtonHoverListeners = (buttons) => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].removeEventListener("mouseover", addHoverEffectToBtn);
    buttons[i].removeEventListener("mouseleave", removeHoverEffectFromBtn);
  }
};

const changeImage = (dataJSON, index) => {
  const img = document.querySelector(".technology-page .technology-img");

  // Tranzicija slike van ekrana
  img.style.transition = "ease-in-out all 1.25s";
  img.style.transform = "translateX(104%)";

  // Ako je screen width >=1440px onda zameni picture source srcset, image src, image alt
  // Ako je screen width <1440px onda zameni image src, image alt i prebaci sliku sa desne na levu stranu (van ekrana)
  setTimeout(() => {
    const deviceScreenWidth1440px = window.matchMedia("(min-width: 1440px)");
    if (deviceScreenWidth1440px.matches) {
      const imgSource = document.querySelector(
        ".technology-page .technology-img-source"
      );
      imgSource.setAttribute(
        "srcset",
        dataJSON.technology[index].images.portrait
      );
      img.setAttribute("src", dataJSON.technology[index].images.landscape);
      img.setAttribute("alt", dataJSON.technology[index].name + " image");
    } else {
      img.setAttribute("src", dataJSON.technology[index].images.landscape);
      img.setAttribute("alt", dataJSON.technology[index].name + " image");
      img.style.transition = "none";
      img.style.transform = "translateX(-104%)";
    }
  }, 1260);

  // Tranzicija nove slike na ekran
  setTimeout(() => {
    img.style.transition = "ease-in-out all 1.275s";
    img.style.transform = "translateX(0%)";
  }, 1275);

  // Fokusiraj novu sliku zbog screen reader-a (accessibility)
  setTimeout(() => {
    document.querySelector(".technology-page .photo-container").focus();
  }, 1500);
};

const changeText = (dataJSON, index) => {
  const terminologyText = document.querySelector(
    ".technology-page .terminology-text"
  );
  terminologyText.classList.remove("change-text-animation-in");
  terminologyText.classList.add("change-text-animation-out");
  setTimeout(() => {
    terminologyText.classList.remove("change-text-animation-out");
    terminologyText.classList.add("change-text-animation-in");
  }, 1250);

  const nameText = document.querySelector(".technology-page .name-text");
  nameText.classList.remove("change-text-animation-in");
  nameText.classList.add("change-text-animation-out");
  setTimeout(() => {
    nameText.textContent = dataJSON.technology[index].name.toUpperCase();
    nameText.classList.remove("change-text-animation-out");
    nameText.classList.add("change-text-animation-in");
  }, 1250);

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
