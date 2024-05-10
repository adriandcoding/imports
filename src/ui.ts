import { partida } from "./modelo";
import {
  valorar,
  obtenerNumeroAleatorio,
  obtenerNumeroCarta,
  obtenerValorCarta,
  sumarPuntos,
  asignarNuevosPuntos,
  obtenerUrlImagen,
  checkearPartida,
} from "./motor";
//función para mostrar la puntuacion
export const mostrarPuntuacion = () => {
  const puntuacion = document.querySelector(".puntuacion");
  if (puntuacion && puntuacion instanceof HTMLParagraphElement) {
    puntuacion.innerHTML = partida.puntosTotales.toString();
  }
  deshabilitarBotonYsi(true);
};
// para pintar el url de cada carta
export const pintarUrlImagen = (urlCarta: string): void => {
  const cartaMostrada = document.querySelector(".cardfront");

  if (cartaMostrada && cartaMostrada instanceof HTMLImageElement) {
    cartaMostrada.src = urlCarta;
  }
};
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
//capturando el botón de pedir carta y agregando funcionalidad
export const pedirCarta = document.querySelector(".pedir-carta");
if (pedirCarta && pedirCarta instanceof HTMLButtonElement) {
  pedirCarta.addEventListener("click", pideCarta);
}
// nueva partida
export const nuevaPartida = (): void => {
  partida.puntosTotales = 0;
  mostrarPuntuacion();
  pintarUrlImagen(
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
  );
  const pedirCarta = document.querySelector(".pedir-carta");
  if (pedirCarta && pedirCarta instanceof HTMLButtonElement) {
    pedirCarta.disabled = false;
  }
  resetGame();
};
//capturando el botón de nueva partida y agregando funcionalidad
export const botonNuevaPartida = document.querySelector(".nueva-partida");
if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
  botonNuevaPartida.addEventListener("click", nuevaPartida);
}
//Boton para resetear y dejar valores por defecto
const resetGame = (): void => {
  const valoracion = document.querySelector(".valoracion");
  if (valoracion && valoracion instanceof HTMLHeadingElement) {
    valoracion.innerHTML = "";
  }
};
// funcion deshabilitar botón de pedir carta
export const deshabilitarBotonPedirCarta = (estaDeshabilitado: boolean) => {
  const pedirCarta = document.querySelector(".pedir-carta");
  if (pedirCarta && pedirCarta instanceof HTMLButtonElement) {
    pedirCarta.disabled = estaDeshabilitado;
  }
};

//funcionalidad de plantarse
const plantarse = (): void => {
  deshabilitarBotonPedirCarta(true);
  deshabilitarBotonYsi(false);
  const valoracion = document.querySelector(".valoracion");
  if (valoracion && valoracion instanceof HTMLHeadingElement) {
    valoracion.innerHTML = valorar();
  }
};
//funcionalidad boton de plantarse
const botonPlantarse = document.querySelector(".plantarse");
if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
  botonPlantarse.addEventListener("click", plantarse);
}
export const deshabilitarBotonYsi = (estaDeshabilitado: boolean) => {
  const botonPlantarse = document.querySelector(".ysi");
  if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.disabled = estaDeshabilitado;
  }
};
const BotonYsi = document.querySelector(".ysi");
if (BotonYsi && BotonYsi instanceof HTMLButtonElement) {
  BotonYsi.addEventListener("click", pideCarta);
}
