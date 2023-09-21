// Constantes importadas

import {
  CONFIG_ROUNDS_MAX_NUMBER,
  CONFIG_ROUNDS_MIN_NUMBER,
  CONFIG_YOUR_NAME_MAX_LENGTH,
  ERR_EVEN_ROUNDS,
  ERR_LONG_NAME,
  ERR_MAX_ROUNDS,
  ERR_MIN_ROUNDS,
  ERR_NOT_DIGITS,
  ERR_VOID_NAME,
  ERR_VOID_ROUNDS,
  ID_INVALID_NAME,
  ID_INVALID_ROUNDS,
  ID_MODE_SELECT,
  ID_ROUNDS_INPUT,
  ID_VALID_DATA,
  ID_YOUR_NAME_INPUT,
  MODE_BEST_OF_OPTION,
  MODE_PLAY_ALL_OPTION,
  MSG_TO_PLAY
} from './constants.js';



// **** SANEAMIENTO Y BÚSQUDA DE ERRORES **** //


// Elimina los espacios iniciales y finales y las tabulaciones, y reemplaza los espacios múltiples

export function sanitizeTextInputValue(value) {
  value = value.trim();
  value = value.replace(/\t+/g, ' ');
  value = value.replace(/ +/g, ' ');

  return value;
}


// Evalúa si el modo de juego es inválido según el número de rondas

export function searchModeValueErrors(value, mode) {
  let error = '';

  if (mode === MODE_BEST_OF_OPTION && value % 2 === 0) {
    error = ERR_EVEN_ROUNDS;
  }

  return error;
}


// Evalúa si el valor de la entrada "Rondas" está vacío, no es un número, está fuera de rango
// o es inválido según el modo de juego

export function searchRoundsValueErrors(value, mode) {
  let error = '';

  if (value.length === 0) {
    error = ERR_VOID_ROUNDS;
  }
  else if (value.search(/[^0-9]/) > -1) {
    error = ERR_NOT_DIGITS;
  }
  else if (value < CONFIG_ROUNDS_MIN_NUMBER) {
    error = ERR_MIN_ROUNDS;
  }
  else if (value > CONFIG_ROUNDS_MAX_NUMBER) {
    error = ERR_MAX_ROUNDS;
  }
  else if (mode === MODE_BEST_OF_OPTION && value % 2 === 0) {
    error = ERR_EVEN_ROUNDS;
  }

  return error;
}


// Evalúa si el valor de la entrada "Tu nombre" está vacío o es muy largo

export function searchYourNameValueErrors(value) {
  let error = '';

  if (value.length === 0) {
    error = ERR_VOID_NAME;
  }
  else if (value.length > CONFIG_YOUR_NAME_MAX_LENGTH) {
    error = ERR_LONG_NAME;
  }

  return error;
}



// **** CONFIGURACIÓN DEL ESTADO "SETTINGS" **** //


// Configura la propiedad "status" según la evaluación del número de rondas y el modo de juego

export function setSettingsStatus(error, id) {

  let status;

  if (error) {
    if (id === ID_YOUR_NAME_INPUT) {
      status = {
        id: ID_INVALID_NAME,
        message: error
      };
    }
    else if (id === ID_ROUNDS_INPUT || id === ID_MODE_SELECT) {
      status = {
        id: ID_INVALID_ROUNDS,
        message: error
      };
    }
  }
  else {
    status = {
      id: ID_VALID_DATA,
      message: MSG_TO_PLAY
    };
  }

  return status;
}



// **** CONFIGURACIÓN DEL ESTADO "GAME" **** //


// Configura la propiedad "roundsToPlay" según el modo de juego y el número de rondas

export function setRoundsToPlay(mode, rounds) {
  let roundsToPlay;

  rounds = Number(rounds);

  if (mode === MODE_BEST_OF_OPTION) {
    roundsToPlay = (rounds + 1) / 2;
  }
  else if (mode === MODE_PLAY_ALL_OPTION) {
    roundsToPlay = rounds;
  }

  return roundsToPlay;
}
