window.onload = function () {
  const header = document.querySelector("header");
  requestAnimationFrame(() => {
    header.style.opacity = "1";
    header.style.transform = "scale(1)";
  });
};

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".scroll-indicator").style.opacity = "1";
  }, 8000);

  window.addEventListener("scroll", function () {
    document.querySelector(".scroll-indicator").style.opacity = "0";
  });
});
