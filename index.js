document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  requestAnimationFrame(() => {
    header.style.opacity = "1";
    header.style.transform = "scale(1)";
  });

  setTimeout(function () {
    document.querySelector(".scroll-indicator").style.opacity = "1";
  }, 8500);

  window.addEventListener("scroll", function () {
    document.querySelector(".scroll-indicator").style.opacity = "0";
  });

  // Parte en frances
  const userLang = navigator.language || navigator.userLanguage;

  if (userLang.includes("fr")) {
    translateToFrench();
    changeImagesForFrance();
    changeFormForFrance();
  }
});

function translateToFrench() {
  document.querySelector("h2").innerHTML = "Vous êtes invités à notre mariage!";
  document.querySelector("h4").innerHTML =
    "Notez cette date dans votre calendrier :";
  document.querySelector("p").innerHTML = `
    💍😍 Nous officialiserons cela à la 
    <a href="https://maps.app.goo.gl/7upc7TdpXHuT461G7" class="custom-link">Salle du Conseil Municipal de l'Hôtel de Ville</a>,
    Sada, à 12h00.<br><br>
    🍽️🥂 Ensuite, nous vous invitons à nous rejoindre au restaurant 
    <a href="https://maps.app.goo.gl/nfvAgVujHdyFBeU48" class="custom-link">Árbore da Veira</a> 
    à 14h00, dans le parc "Monte de San Pedro", à La Corogne, pour un excellent repas en bonne compagnie.<br><br>
    🙌📱 Merci de confirmer votre présence dès que possible via le formulaire ou par WhatsApp. Nous vous confirmerons les horaires exacts plus près de la date.<br><br>`;
}

function changeImagesForFrance() {
  document.querySelector(".textoEscrito").src = "img/gif_titulo_fr.gif";
  document.querySelector(".fechaBoda").src = "img/fecha_boda_fr.png";
}

