export const technologyDotBtnsListen = (dataJSON) => {
  let inProgress = false;

  const buttons = document.querySelectorAll(".technology-page .circle-btn-alt");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
      if (!inProgress) {
        inProgress = true;
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].style.backgroundColor = "transparent";
          buttons[i].style.color = "white";
          buttons[i].style.border = "1px solid rgba(255,255,255,0.25)";
        }
        buttons[i].style.backgroundColor = "white";
        buttons[i].style.color = "rgb(11, 13, 23)";

        const img = document.querySelector(".technology-page .technology-img");
        img.style.transition = "ease-in-out all 1.25s";
        img.style.transform = "translateX(105%)";
        setTimeout(() => {
          const deviceScreenWidth1440px = window.matchMedia(
            "(min-width: 1440px)"
          );
          if (deviceScreenWidth1440px.matches) {
            const imgSource = document.querySelector(
              ".technology-page .technology-img-source"
            );
            imgSource.setAttribute(
              "srcset",
              dataJSON.technology[i].images.portrait
            );
            img.setAttribute("src", dataJSON.technology[i].images.landscape);
            img.setAttribute("alt", dataJSON.technology[i].name + " image");
          } else {
            img.setAttribute("src", dataJSON.technology[i].images.landscape);
            img.setAttribute("alt", dataJSON.technology[i].name + " image");
            img.style.transition = "none";
            img.style.transform = "translateX(-105%)";
          }
        }, 1255);
        setTimeout(() => {
          img.style.transition = "ease-in-out all 1.25s";
          img.style.transform = "translateX(0%)";
        }, 1280);
        setTimeout(() => {
          img.style.transition = "none";
          img.style.transform = "none";
        }, 2531);

        const terminologyText = document.querySelector(
          ".technology-page .terminology-text"
        );
        terminologyText.style.transition = "ease-in-out all 1.25s";
        terminologyText.style.opacity = "0";
        terminologyText.style.scale = "0";
        setTimeout(() => {
          terminologyText.style.opacity = "1";
          terminologyText.style.scale = "1";
          terminologyText.style.transition = "ease-in-out all 1.3s";
        }, 1250);

        const nameText = document.querySelector(".technology-page .name-text");
        nameText.style.transition = "ease-in-out all 1.25s";
        nameText.style.opacity = "0";
        nameText.style.scale = "0";
        setTimeout(() => {
          nameText.textContent = dataJSON.technology[i].name.toUpperCase();
          nameText.style.opacity = "1";
          nameText.style.scale = "1";
          nameText.style.transition = "ease-in-out all 1.3s";
        }, 1250);

        const descText = document.querySelector(".technology-page .desc-text");
        descText.style.transition = "ease-in-out all 1.25s";
        descText.style.opacity = "0";
        descText.style.scale = "0";
        setTimeout(() => {
          let correctedText = dataJSON.technology[i].description;
          correctedText = correctedText.replaceAll("-", "‑");
          descText.textContent = correctedText;
          descText.style.opacity = "1";
          descText.style.scale = "1";
          descText.style.transition = "ease-in-out all 1.3s";
        }, 1250);
        setTimeout(() => {
          inProgress = false;
        }, 2532);
      }
    });
  }
};
