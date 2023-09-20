// ** CONFIGURACIÓN ** //


const CONFIG_ROUNDS_NUMBER = 5;



// ** HTML ** //


// Textos de los elementos HTML

export const TEXT_APP_HEADING = '¡Piedra, papel, tijera!';



// ** ESTADOS ** //


// Propiedad "mode" del estado "settings"

const MODE_BEST_OF_OPTION = 'best-of';


// Propiedad "status.id" de los estados "settings" y "game"

const ID_PAUSE = 'pause';
const ID_START = 'start';


// Propiedad "status.message" de los estados "settings" y "game"

const MSG_CONFIGURE_NAME_AND_ROUNDS = '¡Configurá tu nombre, las rondas y a jugar!';


// Estados "game" y "settings"

export const STATE_GAME = {
  computerPlay: null,
  computerScore: null,
  computerSignalImage: null,
  roundsToPlay: null,
  roundWinner: null,
  status: {
    id: ID_PAUSE,
    message: ''
  },
  userPlay: null,
  userScore: null,
  userSignalImage: null
}

export const STATE_SETTINGS = {
  mode: MODE_BEST_OF_OPTION,
  rounds: CONFIG_ROUNDS_NUMBER,
  status: {
    id: ID_START,
    message: MSG_CONFIGURE_NAME_AND_ROUNDS
  },
  yourName: ''
}
