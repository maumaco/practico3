// React

import { useContext } from 'react';


// Contextos importados

import { MainContext } from '../App.js';


// Componentes importados

import Button from './Button.js';


// Constantes importadas

import {
  ID_INVALID_NAME,
  ID_INVALID_ROUNDS,
  ID_PAUSE,
  ID_START,
  ID_VALID_DATA,
  MSG_DO_CLICK,
  MSG_TO_PLAY,
  STATE_GAME,
  STATE_SETTINGS,
  TEXT_CANCEL_BUTTON,
  TEXT_PLAY_BUTTON,
  TEXT_RESET_BUTTON
} from '../constants/constants.js';


// Funciones importadas

import { setRoundsToPlay } from '../functions/functions.js';



// Definición del componente

export default function Actions() {
  const {
    game,
    settings,
    setGame,
    setSettings
  } = useContext(MainContext);

  // Pausa o valida la configuración e inicia o pausa el juego
  function handlePlayOnclick() {
    // Si la configuración es válida (necesario para jugar) (Botón "¡Jugar!"):
    // * pausa la configuración
    // * inicia juego
    if (settings.status.id === ID_VALID_DATA) {
      setSettings({
        ...settings,
        status: {
          id: ID_PAUSE,
          message: ''
        }
      });

      setGame({
        ...game,
        computerScore: 0,
        roundsToPlay: setRoundsToPlay(settings.mode, settings.rounds),
        status: {
          id: ID_START,
          message: MSG_DO_CLICK
        },
        userScore: 0
      });
    }
    // Si la configuración está pausada (juego iniciado) (botón "Cancelar"):
    // * pausa el juego
    // * valida la configuración (necesario para jugar nuevamente)
    else if (settings.status.id === ID_PAUSE) {
      setGame({
        ...game,
        status: {
          id: ID_PAUSE,
          message: ''
        }
      });

      setSettings({
        ...settings,
        status: {
          id: ID_VALID_DATA,
          message: MSG_TO_PLAY
        }
      });
    }
  }

  // Restablece los estados "settings" y "game"
  function handleResetOnclick() {
    setSettings(STATE_SETTINGS);
    setGame(STATE_GAME);
  }

  return (
    <p>
      <Button
        // Se deshabilita si la configuración está en inicio o es inválida
        disabled={
          settings.status.id === ID_START ||
          settings.status.id === ID_INVALID_NAME ||
          settings.status.id === ID_INVALID_ROUNDS
        }
        onClick={handlePlayOnclick}
        text={
          // Si el juego está iniciado, mostrar el texto "Cancelar"
          // si no, mostrar "¡Jugar!"
          settings.status.id === ID_PAUSE
          ? TEXT_CANCEL_BUTTON
          : TEXT_PLAY_BUTTON
        }
      />

      {' '}

      <Button
        // Se deshabilita si la configuración está en inicio o es inválida
        disabled={
          settings.status.id === ID_START ||
          settings.status.id === ID_INVALID_NAME ||
          settings.status.id === ID_INVALID_ROUNDS
        }
        onClick={handleResetOnclick}
        text={TEXT_RESET_BUTTON}
      />
    </p>
  );
}
