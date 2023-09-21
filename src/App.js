// React

import { createContext, useState } from 'react';


// Componentes importados

import AppHeading from './components/AppHeading.js';
import Controls from './components/Controls.js';


// Constantes importadas

import {
  STATE_GAME,
  STATE_SETTINGS,
  TEXT_APP_HEADING
} from './constants.js';



// Contextos exportados

export const MainContext = createContext(null);



// Definición del componente

export default function App() {
  // status.id: 'start', 'invalid-name', 'invalid-rounds', 'valid-data', 'pause'
  const [game, setGame] = useState(STATE_GAME);

  // status.id: 'pause', 'start'
  const [settings, setSettings] = useState(STATE_SETTINGS);

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
        </main>
      </MainContext.Provider>
    </>
  );
}
