window.onload = function () {
  const header = document.querySelector("header");
  requestAnimationFrame(() => {
    header.style.opacity = "1"; // Cambia la opacidad para hacer visible el header
    header.style.transform = "scale(1)"; // Aplica el zoom out
  });
};
