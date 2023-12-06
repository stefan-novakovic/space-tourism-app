const initApp = () => {
  console.log("DOM Content Loaded!");
  startApp();
};

document.addEventListener("DOMContentLoaded", initApp);

const startApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  hamburgerBtn.addEventListener("click", (event) => {
    hamburgerBtn.classList.toggle("hamburger-btn-active");
    hamburgerBtn.classList.toggle("hamburger-btn-notActive");
  });

  const exploreBtn = document.getElementById("explore");
  const exploreOverlay = document.getElementById("explore-overlay");
  exploreBtn.addEventListener("mouseover", (event) => {
    exploreOverlay.classList.remove("explore-hover-overlay-notActive");
    exploreOverlay.classList.add("explore-hover-overlay-active");
  });
  exploreBtn.addEventListener("mouseleave", (event) => {
    exploreOverlay.classList.remove("explore-hover-overlay-active");
    exploreOverlay.classList.add("explore-hover-overlay-notActive");
  });
};
