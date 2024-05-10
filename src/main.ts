import { partida } from "./modelo";
//función para mostrar la puntuacion
export const mostrarPuntuacion = () => {
  const puntuacion = document.querySelector(".puntuacion");
  if (puntuacion && puntuacion instanceof HTMLParagraphElement) {
    puntuacion.innerHTML = partida.puntosTotales.toString();
  }
  deshabilitarBotonYsi(true);
};
document.addEventListener("DOMContentLoaded", mostrarPuntuacion);

import {} from "./motor";
import { deshabilitarBotonYsi } from "./ui";
