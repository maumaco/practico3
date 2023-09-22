// Constantes importadas

import {
  ARR_PLAYS,
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
  MSG_COMPUTER_POINT,
  MSG_COMPUTER_VICTORY,
  MSG_TIE_NO_POINTS,
  MSG_TIE_NO_VICTORY,
  MSG_USER_POINT,
  MSG_USER_VICTORY,
  MODE_BEST_OF_OPTION,
  MODE_PLAY_ALL_OPTION,
  MSG_TO_PLAY,
  PLAY_PAPER,
  PLAY_ROCK,
  PLAY_SCISSORS,
  WIN_COMPUTER,
  WIN_NOBODY,
  WIN_TIE,
  WIN_USER
} from '../constants/constants.js';



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


// Establece el valor de "settings.status" según la evaluación del número de rondas y el modo de juego

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


// Establece la jugada de la computadora según un número entero generado aleatoriamente

export function setComputerPlay() {
  return ARR_PLAYS[Math.floor(Math.random() * ARR_PLAYS.length)];
}


// Establece la imagen de la jugada de la computadora según su jugada y el atributo "id" de la imagen

export function setComputerSignalImage(signalImagesArray, play) {
  for (let i = 0; i < signalImagesArray.length; i++) {
    if (signalImagesArray[i].id.includes(play)) {
      return signalImagesArray[i].id;
    }
  }
}


// Establece un mensaje según el ganador del juego

export function setGameMessage(gameWinner) {
  let message = '';

  if (gameWinner === WIN_USER) {
    message = MSG_USER_VICTORY;
  }
  else if (gameWinner === WIN_COMPUTER) {
    message = MSG_COMPUTER_VICTORY;
  }
  else if (gameWinner === WIN_TIE) {
    message = MSG_TIE_NO_VICTORY;
  }

  return message;
}


// Establece el ganador del juego según el modo de juego, los marcadores y las rondas a jugar

export function setGameWinner(mode, userScore, computerScore, roundsToPlay) {
  let gameWinner;

  if (mode === MODE_BEST_OF_OPTION) {
    if (userScore === roundsToPlay) {
      gameWinner = WIN_USER;
    }
    else if (computerScore === roundsToPlay) {
      gameWinner = WIN_COMPUTER;
    }
    else {
      gameWinner = WIN_NOBODY;
    }
  }
  else if (mode === MODE_PLAY_ALL_OPTION) {
    if (userScore + computerScore === roundsToPlay) {
      if (userScore > computerScore) {
        gameWinner = WIN_USER;
      }
      else if (computerScore > userScore) {
        gameWinner = WIN_COMPUTER;
      }
      else {
        gameWinner = WIN_TIE;
      }
    }
    else {
      gameWinner = WIN_NOBODY;
    }
  }

  return gameWinner;
}


// Establece el marcador del usuario y la computadora según el ganador de la ronda

export function setPlayerScore(player, roundWinner, score) {
  if (player === roundWinner) {
    return score + 1;
  }
  else {
    return score;
  }
}


// Establece un mensaje según el ganador de la ronda

export function setRoundMessage(roundWinner) {
  let message = '';

  if (roundWinner === WIN_USER) {
    message = MSG_USER_POINT;
  }
  else if (roundWinner === WIN_COMPUTER) {
    message = MSG_COMPUTER_POINT;
  }
  else if (roundWinner === WIN_NOBODY) {
    message = MSG_TIE_NO_POINTS;
  }

  return message;
}


// Establece las rondas a jugar según el modo de juego y el número de rondas

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


// Establece el ganador de la ronda según la jugada del usuario y la computadora

export function setRoundWinner(userPlay, computerPlay) {
  let roundWinner;

  if (userPlay !== computerPlay) {
    if (
      (userPlay === PLAY_ROCK && computerPlay === PLAY_SCISSORS) ||
      (userPlay === PLAY_PAPER && computerPlay === PLAY_ROCK) ||
      (userPlay === PLAY_SCISSORS && computerPlay === PLAY_PAPER)
    ) {
      roundWinner = WIN_USER;
    }
    else {
      roundWinner = WIN_COMPUTER;
    }
  }
  else {
    roundWinner = WIN_NOBODY;
  }

  return roundWinner;
}


// Establece la jugada del usuario según el atributo "id" de la imagen de la jugada seleccionada

export function setUserPlay(id) {

  for (let i = 0; i < ARR_PLAYS.length; i++) {

    if (id.includes(ARR_PLAYS[i])) {
      return ARR_PLAYS[i];
    }
  }
}
