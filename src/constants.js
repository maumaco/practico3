// **** CONFIGURACIÓN **** //


const CONFIG_GAME_MODE = 'best-of';
const CONFIG_ROUNDS_NUMBER = 5;
export const CONFIG_ROUNDS_MAX_NUMBER = 99;
export const CONFIG_ROUNDS_MIN_NUMBER = 1;
export const CONFIG_YOUR_NAME_MAX_LENGTH = 30;



// **** HTML **** //


// Atributo "id"

export const ID_MODE_SELECT = 'mode-select';
export const ID_ROUNDS_INPUT = 'rounds-input';
export const ID_YOUR_NAME_INPUT = 'your-name-input';


// Atributo "placeholder"

export const PH_ROUNDS_INPUT = 'número';
export const PH_YOUR_NAME_INPUT = 'nombre';


// Atributo "size"

export const SIZE_ROUNDS_INPUT = 3;
export const SIZE_YOUR_NAME_INPUT = 15;


// Textos de los elementos

export const TEXT_APP_HEADING = '¡Piedra, papel, tijera!';
const TEXT_BEST_OF_OPTION = 'mejor de';
export const TEXT_CANCEL_BUTTON = 'Cancelar'
export const TEXT_MODE_LABEL = 'Modo';
const TEXT_PLAY_ALL_OPTION = 'jugar todas';
export const TEXT_PLAY_BUTTON = '¡Jugar!';
export const TEXT_RESET_BUTTON = 'Restablecer';
export const TEXT_ROUNDS_LABEL = 'Rondas';
export const TEXT_YOUR_NAME_LABEL = 'Tu nombre';



// **** ESTADOS **** //


// Propiedad "mode" del estado "settings"

export const MODE_BEST_OF_OPTION = 'best-of';
export const MODE_PLAY_ALL_OPTION = 'play-all';


// Propiedad "status.id" de los estados "settings" y "game"

export const ID_INVALID_NAME = 'invalid-name';
export const ID_INVALID_ROUNDS = 'invalid-rounds';
export const ID_PAUSE = 'pause';
export const ID_START = 'start';
export const ID_VALID_DATA = 'valid-data';


// Propiedad "status.message" de los estados "settings" y "game"

export const ERR_EVEN_ROUNDS = 'Según el modo de juego, el número de rondas debe ser impar';
export const ERR_LONG_NAME = `Tu nombre no puede superar los ${CONFIG_YOUR_NAME_MAX_LENGTH} caracteres`;
export const ERR_MAX_ROUNDS = `El número máximo de rondas es ${CONFIG_ROUNDS_MAX_NUMBER}`;
export const ERR_MIN_ROUNDS = `El número mínimo de rondas es ${CONFIG_ROUNDS_MIN_NUMBER}`;
export const ERR_NOT_DIGITS = 'Solo podés ingresar dígitos';
export const ERR_VOID_NAME = 'Es necesario que ingreses un nombre';
export const ERR_VOID_ROUNDS = 'Es necesario que ingreses un número';

const MSG_CONFIGURE_NAME_AND_ROUNDS = '¡Configurá tu nombre, las rondas y a jugar!';
export const MSG_DO_CLICK = 'Hacé clic en tu jugada';
export const MSG_TO_PLAY = '¡A jugar!';


// Estados "game" y "settings"

export const STATE_GAME = {
  computerPlay: null,
  computerScore: 0,
  computerSignalImage: null,
  roundsToPlay: null,
  roundWinner: null,
  status: {
    id: ID_PAUSE,
    message: ''
  },
  userPlay: null,
  userScore: 0,
  userSignalImage: null
}

export const STATE_SETTINGS = {
  mode: CONFIG_GAME_MODE,
  rounds: CONFIG_ROUNDS_NUMBER.toString(),
  status: {
    id: ID_START,
    message: MSG_CONFIGURE_NAME_AND_ROUNDS
  },
  yourName: ''
}



// **** ARREGLOS **** //

export const ARR_MODE_OPTIONS = [
  { key: MODE_BEST_OF_OPTION, text: TEXT_BEST_OF_OPTION, value: MODE_BEST_OF_OPTION },
  { key: MODE_PLAY_ALL_OPTION, text: TEXT_PLAY_ALL_OPTION, value: MODE_PLAY_ALL_OPTION }
];
