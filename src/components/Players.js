// React

import { useContext } from 'react';


// Contextos importados

import { MainContext } from '../App.js';


// Componentes importados

import Player from './Player.js';


// Constantes importadas

import {
  ARR_COMPUTER_SIGNAL_IMAGES,
  ARR_USER_SIGNAL_IMAGES,
  ID_HAND_MOVEMENTS,
  ID_INVALID_NAME,
  ID_START,
  MSG_ROCK_PAPER_SCISSORS,
  TEXT_COMPUTER_HEADING,
  TEXT_DEFAULT_USER_HEADING
} from '../constants/constants.js';


// Funciones importadas

import {
  setComputerPlay,
  setComputerSignalImage,
  setRoundWinner,
  setUserPlay
} from '../functions/functions.js';



// Definición del componente

export default function Players() {
  const { game, settings, setGame } = useContext(MainContext);

  // Obtiene la jugada del usuario y la computadora y establece el estado del juego según sus valores
  // status.id: 'hand-movements'
  function handleUserSignalsClick(e) {
    let currentUserPlay = setUserPlay(e.target.id);
    let currentComputerPlay = setComputerPlay();

    setGame({
      ...game,
      computerPlay: currentComputerPlay,
      computerSignalImage: setComputerSignalImage(ARR_COMPUTER_SIGNAL_IMAGES, currentComputerPlay),
      roundWinner: setRoundWinner(currentUserPlay, currentComputerPlay),
      status: {
        id: ID_HAND_MOVEMENTS,
        message: MSG_ROCK_PAPER_SCISSORS
      },
      userPlay: currentUserPlay,
      userSignalImage: e.target.id
    });
  }

  return (
    <div>
      <Player
        headingText={
          // Si el nombre del usuario es válido, mostrar su nombre
          // si no, mostrar el nombre por defecto
          settings.status.id !== ID_START && settings.status.id !== ID_INVALID_NAME
          ? settings.yourName
          : TEXT_DEFAULT_USER_HEADING
        }
        scoreValue={game.userScore}
        signalsImages={ARR_USER_SIGNAL_IMAGES}
        signalsOnClick={
          // Si la ronda está iniciada, habilitar el evento "onclick" y agregar su controlador
          // en las imágenes de las jugadas del usuario
          game.status.id === ID_START
          ? handleUserSignalsClick
          : undefined
        }
      />

      <Player
        headingText={TEXT_COMPUTER_HEADING}
        scoreValue={game.computerScore}
        signalsImages={ARR_COMPUTER_SIGNAL_IMAGES}
      />
    </div>
  );
}
