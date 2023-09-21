// React

import { useContext } from 'react';


// Contextos importados

import { MainContext } from '../App.js';


// Constantes importadas

import { ID_PAUSE } from '../constants.js';



// Definición del componente

export default function Messages() {
  const { game, settings } = useContext(MainContext);

  return (
    <p>
      <samp>
        {
          // Si el juego está pausado, mostrar los mensajes de la configuración
          // si no, mostrar los del juego
          game.status.id === ID_PAUSE
          ? settings.status.message
          : game.status.message
        }
      </samp>
    </p>
  );
}
