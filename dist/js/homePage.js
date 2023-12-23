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
};
