import { partida } from "./modelo";
import { deshabilitarBotonPedirCarta, nuevaPartida } from "./ui";

//función para generar carta aleatoria
export const obtenerNumeroAleatorio = (): number => {
  return Math.floor(Math.random() * 10) + 1;
};
export const obtenerNumeroCarta = (numeroAleatorio: number): number => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  }

  return numeroAleatorio;
};
//función para obtener el valor de la carta
export const obtenerValorCarta = (carta: number): number => {
  if (carta > 7) {
    return 0.5;
  }

  return carta;
};
//generar puntuación
export const sumarPuntos = (puntos: number) => {
  return partida.puntosTotales + puntos;
};
export const asignarNuevosPuntos = (nuevosPuntos: number) => {
  partida.puntosTotales = nuevosPuntos;
};
//capturando las url de las imagenes
export const obtenerUrlImagen = (carta: number): string => {
  let imagen;
  // Mapeando el valor
  switch (carta) {
    case 1:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    case 2:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;
    case 3:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    case 4:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    case 5:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case 6:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    case 7:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";

      break;
    case 10:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    case 11:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case 12:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;
    default:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
  return imagen;
};
//valorar la opción al plantarse
export const valorar = (): string => {
  let mensaje: string = "";
  if (partida.puntosTotales < 4) {
    mensaje = "Has sido muy conservador";
  }
  if (partida.puntosTotales === 5) {
    mensaje = "Te ha entrado el canguelo eh?";
  }
  if (partida.puntosTotales === 6 || partida.puntosTotales === 7) {
    mensaje = "Casi casi...";
  }
  if (partida.puntosTotales === partida.numeroGanador) {
    mensaje = "¡ Lo has clavado! ¡Enhorabuena!";
  }

  return mensaje;
};
//funcionalidad para el botón de game over
const gameOver = (): void => {
  alert("¡HAS PERDIDO!\u{1F600}");
  deshabilitarBotonPedirCarta(true);
};
export const checkearPartida = () => {
  if (partida.puntosTotales === 7.5) {
    alert("¡HAS GANADO!\u{1F600}");
  }
  if (partida.puntosTotales > 7.5) {
    gameOver();
  }
};

export const iniciarPartida = () => {
  nuevaPartida();
};
