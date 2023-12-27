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
      exploreBtn.classList.add("explore-btn-click-effect");
      setTimeout(() => {
        exploreBtn.classList.remove("explore-btn-click-effect");
        inProgress = false;
      }, 1001);
    }
  });
};
