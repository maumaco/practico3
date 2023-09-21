// React

import { createContext } from 'react';
import { useState } from 'react';



// Componentes

import AppHeading from './components/AppHeading.js';



// Constantes

import { STATE_GAME } from './constants.js';
import { STATE_SETTINGS } from './constants.js';
import { TEXT_APP_HEADING } from './constants.js';



// Contextos

export const MainContext = createContext(null);



// Aplicación

export default function App() {
  // status.id: 'pause'
  const [game, setGame] = useState(STATE_GAME);

  // status.id: 'start'
  const [settings, setSettings] = useState(STATE_SETTINGS);

  return (
    <>
      <header>
        <AppHeading
          text={TEXT_APP_HEADING}
        />
      </header>

      <MainContext.Provider
        value={{
          game,
          settings,
          setGame,
          setSettings
        }}
      >
        <main>
        </main>
      </MainContext.Provider>
    </>
  );
}
