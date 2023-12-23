export const crewDotBtnsListen = (dataJSON) => {
  let inProgress = false;

  const buttons = document.querySelectorAll(".circle-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
      const deviceScreenWidth768px = window.matchMedia("(min-width: 768px)");
      const deviceScreenWidth1440px = window.matchMedia("(min-width: 1440px)");

      if (!inProgress) {
        inProgress = true;
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].style.transition = "ease-in-out opacity 0.75s";
          buttons[i].style.opacity = "0.1744";
        }
        buttons[i].style.transition = "ease-in-out opacity 0.75s";
        buttons[i].style.transitionDelay = "350ms";
        buttons[i].style.opacity = "1";

        const img = document.querySelector(".crew-img");
        img.style.transition = "ease-in-out transform 1.25s";
        if (
          deviceScreenWidth768px.matches &&
          !deviceScreenWidth1440px.matches
        ) {
          img.style.transform = "translateY(540px)";
        } else if (
          deviceScreenWidth768px.matches &&
          deviceScreenWidth1440px.matches
        ) {
          img.style.transform = "translateY(715px)";
        } else {
          img.style.transform = "translateY(225px)";
        }
        setTimeout(() => {
          img.setAttribute("src", dataJSON.crew[i].images.png);
          img.setAttribute("alt", dataJSON.crew[i].name + " image");
          img.style.transition = "ease-in-out transform 1.25s";
          img.style.transform = "translateY(0px)";
        }, 1500);

        const crewRoleText = document.querySelector(".crew-role-text");
        crewRoleText.style.transition = "ease-in-out all 1.5s";
        crewRoleText.style.opacity = "0";
        crewRoleText.style.scale = "0";
        setTimeout(() => {
          crewRoleText.textContent = dataJSON.crew[i].role.toUpperCase();
          crewRoleText.style.opacity = "0.4951";
          crewRoleText.style.scale = "1";
          crewRoleText.style.transition = "ease-in-out all 1.25s";
        }, 1500);

        const crewNameText = document.querySelector(".crew-name-text");
        crewNameText.style.transition = "ease-in-out all 1.5s";
        crewNameText.style.opacity = "0";
        crewNameText.style.scale = "0";
        setTimeout(() => {
          crewNameText.textContent = dataJSON.crew[i].name.toUpperCase();
          crewNameText.style.opacity = "1";
          crewNameText.style.scale = "1";
          crewNameText.style.transition = "ease-in-out all 1.25s";
        }, 1500);

        const crewBioText = document.querySelector(".crew-bio-text");
        crewBioText.style.transition = "ease-in-out all 1.5s";
        crewBioText.style.opacity = "0";
        crewBioText.style.scale = "0";
        setTimeout(() => {
          let correctedText = dataJSON.crew[i].bio;
          correctedText = correctedText.replaceAll("-", "‑");
          crewBioText.textContent = correctedText;
          crewBioText.style.opacity = "1";
          crewBioText.style.scale = "1";
          if (
            deviceScreenWidth768px.matches &&
            !deviceScreenWidth1440px.matches
          ) {
            if (dataJSON.crew[i].name === "Douglas Hurley") {
              document.querySelector(
                ".text-and-buttons-container"
              ).style.width = "458px";
            } else if (dataJSON.crew[i].name === "Mark Shuttleworth") {
              document.querySelector(
                ".text-and-buttons-container"
              ).style.width = "520px";
            } else if (dataJSON.crew[i].name === "Anousheh Ansari") {
              document.querySelector(
                ".text-and-buttons-container"
              ).style.width = "535.7px";
            } else {
              document.querySelector(
                ".text-and-buttons-container"
              ).style.width = "592px";
            }
          } else if (
            deviceScreenWidth768px.matches &&
            deviceScreenWidth1440px.matches
          ) {
            document.querySelector(".text-and-buttons-container").style.width =
              "auto";
            crewBioText.style.width = "444px";
          }
          crewBioText.style.transition = "ease-in-out all 1.25s";
        }, 1500);
        setTimeout(() => {
          inProgress = false;
        }, 1525);
      }
    });
  }
};

export const crewWindowResizeListen = (dataJSON) => {
  window.addEventListener("resize", (event) => {
    let index;
    const buttons = document.querySelectorAll(".circle-btn");
    for (let i = 0; i < buttons.length; i++) {
      if (getComputedStyle(buttons[i]).getPropertyValue("opacity") === "1") {
        index = i;
      }
    }

    if (window.innerWidth < 768) {
      document.querySelector(".crew-bio-text").style.width = "auto";
      document.querySelector(".text-and-buttons-container").style.width =
        "327px";
    } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      document.querySelector(".crew-bio-text").style.width = "auto";
      if (dataJSON.crew[index].name === "Douglas Hurley") {
        document.querySelector(".text-and-buttons-container").style.width =
          "458px";
      } else if (dataJSON.crew[index].name === "Mark Shuttleworth") {
        document.querySelector(".text-and-buttons-container").style.width =
          "520px";
      } else if (dataJSON.crew[index].name === "Anousheh Ansari") {
        document.querySelector(".text-and-buttons-container").style.width =
          "535.7px";
      } else {
        document.querySelector(".text-and-buttons-container").style.width =
          "592px";
      }
    } else if (window.innerWidth >= 1440) {
      document.querySelector(".crew-bio-text").style.width = "444px";
      document.querySelector(".text-and-buttons-container").style.width =
        "auto";
    }
  });
};
