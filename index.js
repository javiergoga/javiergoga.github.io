window.onload = function () {
  const header = document.querySelector("header");
  requestAnimationFrame(() => {
    header.style.opacity = "1"; // Cambia la opacidad para hacer visible el header
    header.style.transform = "scale(1)"; // Aplica el zoom out
  });
};

document.addEventListener("DOMContentLoaded", function () {
  // Mostrar el indicador tras 6 segundos
  setTimeout(function () {
    document.querySelector(".scroll-indicator").style.opacity = "1"; // Aparece el indicador
  }, 8000);

  // Desaparecer el indicador al hacer scroll
  window.addEventListener("scroll", function () {
    document.querySelector(".scroll-indicator").style.opacity = "0"; // Desaparece el indicador
  });
});
