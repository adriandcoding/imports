import { partida } from "./modelo";
import {
  obtenerNumeroAleatorio,
  obtenerNumeroCarta,
  obtenerValorCarta,
  sumarPuntos,
  asignarNuevosPuntos,
  obtenerUrlImagen,
  checkearPartida,
} from "./motor";
import { pintarUrlImagen, deshabilitarBotonYsi } from "./ui";

//función para mostrar la puntuacion
export const mostrarPuntuacion = () => {
  const puntuacion = document.querySelector(".puntuacion");
  if (puntuacion && puntuacion instanceof HTMLParagraphElement) {
    puntuacion.innerHTML = partida.puntosTotales.toString();
  }
  deshabilitarBotonYsi(true);
};
document.addEventListener("DOMContentLoaded", mostrarPuntuacion);

// pedir carta
export const pideCarta = (): void => {
  const numeroAleatorio = obtenerNumeroAleatorio();
  const carta = obtenerNumeroCarta(numeroAleatorio);
  const urlCarta = obtenerUrlImagen(carta);
  pintarUrlImagen(urlCarta);
  const puntos = obtenerValorCarta(carta);
  const puntosSumados = sumarPuntos(puntos);
  asignarNuevosPuntos(puntosSumados);
  checkearPartida();
  mostrarPuntuacion();
};
