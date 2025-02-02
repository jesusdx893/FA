/*onload = () => {
  document.body.classList.remove("container");
};
*/
window.onload = () => {
  document.body.classList.remove("container");

  console.log("Archivo script.js cargado correctamente");

  const messages = [
    "TE AMOOOOOOOOOO VALERIA <3",
    "No hay palabras suficientes para decirte cuánto te quiero, eres mi todo.",
    "Cada estrella en el cielo lleva un pedacito de mi amor por ti.",
    "Como las flores buscan el sol, mi corazón busca tu amor.",
    "Tu amor es el regalo más hermoso que he recibido. Nunca dejaré de agradecerlo",
    "Te quiero mucho, y cada día que pasa, mi amor por ti crece más.",
    "Eres el amor de mi vida, y te quiero más de lo que jamás podrías imaginar",
    "Te quiero tanto que a veces me pregunto cómo tuve tanta suerte de encontrarte.",
    "Te quiero mucho, y cada latido de mi corazón lo confirma."
  ];

  let messageIndex = 0;
  const messageElement = document.getElementById('dynamic-message');

  if (!messageElement) {
    console.error("No se encontró el elemento #dynamic-message");
    return;
  }

  function showNextMessage() {
    messageElement.textContent = messages[messageIndex];
    messageElement.style.opacity = 1;

    setTimeout(() => {
      messageElement.style.opacity = 0;
    }, 3000); // Oculta el mensaje después de 4 segundos

    messageIndex = (messageIndex + 1) % messages.length;
  }

  setInterval(showNextMessage, 5000); // Cambia el mensaje cada 5 segundos
  showNextMessage(); // Muestra el primer mensaje inmediatamente
};


