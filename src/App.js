// React

import { createContext, useState } from 'react';


// Componentes

import AppHeading from './components/AppHeading.js';
import Controls from './components/Controls.js';
import Messages from './components/Messages.js';
import Players from './components/Players.js';
import Address from './components/Address.js';


// Constantes

import {
  ARR_ADDRESS_LINKS,
  CONFIG_HAND_MOVEMENTS_TIMEOUT_MS,
  CONFIG_ROUND_OUTCOME_TIMEOUT_MS,
  ID_END,
  ID_HAND_MOVEMENTS,
  ID_ROUND_OUTCOME,
  ID_START,
  ID_VALID_DATA,
  MSG_DO_CLICK,
  PLAYER_COMPUTER,
  PLAYER_USER,
  STATE_GAME,
  STATE_SETTINGS,
  TEXT_APP_HEADING,
  WIN_NOBODY
} from './constants/constants.js';


// Funciones

import {
  setGameMessage,
  setGameWinner,
  setPlayerScore,
  setRoundMessage
} from './functions/functions.js';



// Definición de contextos

export const MainContext = createContext(null);



// Definición del componente

export default function App() {
  // status.id: 'start', 'invalid-name', 'invalid-rounds', 'valid-data', 'pause'
  const [game, setGame] = useState(STATE_GAME);

  // status.id: 'pause', 'start', 'hand-movements', 'round-outcome', 'end'
  const [settings, setSettings] = useState(STATE_SETTINGS);

  // Establece el estado del juego según el resultado de la ronda y borra el temporizador "handMovementsTimeout"
  function handleHandMovementsTimeout() {
    setGame({
      ...game,
      computerScore: setPlayerScore(PLAYER_COMPUTER, game.roundWinner, game.computerScore),
      status: {
        id: ID_ROUND_OUTCOME,
        message: setRoundMessage(game.roundWinner)
      },
      userScore: setPlayerScore(PLAYER_USER, game.roundWinner, game.userScore)
    });
    clearTimeout(handMovementsTimeout);
  }

  // Evalúa si hay un ganador del juego luego de cada ronda y borra el temporizador "roundOutcomeTimeout"
  // Si hay un ganador, valida la configuración y finaliza el juego
  // si no, inicia una nueva ronda
  function handleRoundOutcomeTimeout() {
    let currentGameWinner = setGameWinner(settings.mode, game.userScore, game.computerScore, game.roundsToPlay);

    if (currentGameWinner !== WIN_NOBODY) {
      setSettings({
        ...settings,
        status: {
          id: ID_VALID_DATA,
          message: ''
        }
      });
      setGame({
        ...game,
        status: {
          id: ID_END,
          message: setGameMessage(currentGameWinner)
        }
      });
    }
    else {
      setGame({
        ...game,
        status: {
          id: ID_START,
          message: MSG_DO_CLICK
        }
      });
    }
    clearTimeout(roundOutcomeTimeout);
  }

  // Temporizadores
  let handMovementsTimeout;
  let roundOutcomeTimeout;

  // Si el estado del juego corresponde al movimiento de manos, se establece el temporizador
  // "handMovementsTimeout"
  if (game.status.id === ID_HAND_MOVEMENTS) {
    handMovementsTimeout = window.setTimeout(handleHandMovementsTimeout, CONFIG_HAND_MOVEMENTS_TIMEOUT_MS);
  }
  // si no, si el estado del juego corresponde al resultado de la ronda, se establece el temporizador
  // "roundOutcomeTimeout"
  else if (game.status.id === ID_ROUND_OUTCOME) {
    roundOutcomeTimeout = window.setTimeout(handleRoundOutcomeTimeout, CONFIG_ROUND_OUTCOME_TIMEOUT_MS);
  }

  return (
    <>
      <header>
        <AppHeading
          text={TEXT_APP_HEADING}
        />
      </header>

      <MainContext.Provider
        value={{ game, settings, setGame, setSettings }}
      >
        <main>
          <Controls />
          <Messages />
          <Players />
        </main>
      </MainContext.Provider>

      <footer>
        <Address
          links={ARR_ADDRESS_LINKS}
        />
      </footer>
    </>
  );
}
