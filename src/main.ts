import { partida } from "./modelo";
import {
  obtenerNumeroAleatorio,
  obtenerNumeroCarta,
  obtenerValorCarta,
  sumarPuntos,
asignarNuevosPuntos,obtenerUrlImagen,valorar} from "./motor";

//función para mostrar la puntuacion
const mostrarPuntuacion = () => {
  const puntuacion = document.querySelector(".puntuacion");
  if (puntuacion && puntuacion instanceof HTMLParagraphElement) {
    puntuacion.innerHTML = partida.puntosTotales.toString();
  }
  deshabilitarBotonYsi(true)
};
document.addEventListener("DOMContentLoaded", mostrarPuntuacion);



// para pintar el url de cada carta
const pintarUrlImagen = (urlCarta: string): void => {
  const cartaMostrada = document.querySelector(".cardfront");

  if (cartaMostrada && cartaMostrada instanceof HTMLImageElement) {
    cartaMostrada.src = urlCarta;
  }
};

//funcionalidad para el botón de game over
const gameOver = (): void => {
  alert("¡HAS PERDIDO!\u{1F600}");
  deshabilitarBotonPedirCarta(true);
};
const checkearPartida = () => {
  if (partida.puntosTotales === 7.5) {
    alert("¡HAS GANADO!\u{1F600}");
  }
  if (partida.puntosTotales > 7.5) {
    gameOver();
  }
};

// pedir carta
const pideCarta = (): void => {
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
const pedirCarta = document.querySelector(".pedir-carta");
if (pedirCarta && pedirCarta instanceof HTMLButtonElement) {
  pedirCarta.addEventListener("click", pideCarta);
}


// nueva partida
const nuevaPartida = (): void => {
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
const botonNuevaPartida = document.querySelector(".nueva-partida");
if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
  botonNuevaPartida.addEventListener("click", nuevaPartida);
}


//funcionalidad de plantarse
const plantarse = (): void => {
  deshabilitarBotonPedirCarta(true);
  deshabilitarBotonYsi(false);
  const valoracion = document.querySelector(".valoracion");
  if (valoracion && valoracion instanceof HTMLHeadingElement) {
    valoracion.innerHTML = valorar();
  }
};

// funcion deshabilitar botón de pedir carta
const deshabilitarBotonPedirCarta = (estaDeshabilitado: boolean) => {
  const pedirCarta = document.querySelector(".pedir-carta");
  if (pedirCarta && pedirCarta instanceof HTMLButtonElement) {
    pedirCarta.disabled = estaDeshabilitado;
  }
};
//funcionalidad boton de plantarse
let botonPlantarse = document.querySelector(".plantarse");
if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
  botonPlantarse.addEventListener("click", plantarse);
}
const deshabilitarBotonYsi = (estaDeshabilitado: boolean) => {
  const botonPlantarse = document.querySelector(".ysi");
  if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.disabled = estaDeshabilitado;
  }
};
const BotonYsi = document.querySelector(".ysi");
if (BotonYsi && BotonYsi instanceof HTMLButtonElement) {
  BotonYsi.addEventListener("click", pideCarta);
}
//Boton para resetear y dejar valores por defecto
const resetGame = (): void => {
  
  const valoracion = document.querySelector(".valoracion");
  if (valoracion && valoracion instanceof HTMLHeadingElement) {
    valoracion.innerHTML = "";
  }
};
