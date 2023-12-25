export const homeExploreBtnListen = () => {
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

  let inProgress = false;
  exploreBtn.addEventListener("click", (event) => {
    if (!inProgress) {
      inProgress = true;
      exploreBtn.style.transform = "rotate(720deg)";
      exploreBtn.style.transition = "1s";
      setTimeout(() => {
        exploreBtn.style.transform = "rotate(0deg)";
        exploreBtn.style.transition = "0s";
        inProgress = false;
      }, 1001);
    }
  });
};
