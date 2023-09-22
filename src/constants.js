// Recursos importados

import paperImage from './assets/paper.png'
import rockImage from './assets/rock.png'
import scissorsImage from './assets/scissors.png'



// **** CONFIGURACIÓN **** //


/*NE*/ const CONFIG_GAME_MODE = 'best-of';
export const CONFIG_HAND_MOVEMENTS_TIMEOUT_MS = 1500;
export const CONFIG_ROUND_OUTCOME_TIMEOUT_MS = 2500;
/*NE*/ const CONFIG_ROUNDS_NUMBER = 5;
export const CONFIG_ROUNDS_MAX_NUMBER = 99;
export const CONFIG_ROUNDS_MIN_NUMBER = 1;
/*NE*/ const CONFIG_SIGNAL_IMAGES_HEIGHT = 80;
/*NE*/ const CONFIG_SIGNAL_IMAGES_WIDTH = 80;
export const CONFIG_YOUR_NAME_MAX_LENGTH = 30;



// **** HTML **** //


// Atributo "alt"

export const ALT_PAPER_IMAGE = 'papel';
export const ALT_ROCK_IMAGE = 'piedra';
export const ALT_SCISSORS_IMAGE = 'tijera';


// Atributo "id"

/*NE*/ const ID_COMPUTER_PREFIX = 'computer-';
export const ID_MODE_SELECT = 'mode-select';
/*NE*/ const ID_PAPER_IMAGE = 'paper-image';
/*NE*/ const ID_ROCK_IMAGE = 'rock-image';
export const ID_ROUNDS_INPUT = 'rounds-input';
/*NE*/ const ID_SCISSORS_IMAGE = 'scissors-image';
/*NE*/ const ID_USER_PREFIX = 'user-';
export const ID_YOUR_NAME_INPUT = 'your-name-input';


// Atributo "placeholder"

export const PH_ROUNDS_INPUT = 'número';
export const PH_YOUR_NAME_INPUT = 'nombre';


// Atributo "size"

export const SIZE_ROUNDS_INPUT = 3;
export const SIZE_YOUR_NAME_INPUT = 15;


// Textos de los elementos

export const TEXT_APP_HEADING = '¡Piedra, papel, tijera!';
/*NE*/ const TEXT_BEST_OF_OPTION = 'mejor de';
export const TEXT_CANCEL_BUTTON = 'Cancelar'
export const TEXT_COMPUTER_HEADING = 'Computadora';
export const TEXT_DEFAULT_USER_HEADING = 'Usuario/a';
export const TEXT_MODE_LABEL = 'Modo';
/*NE*/ const TEXT_PLAY_ALL_OPTION = 'jugar todas';
export const TEXT_PLAY_BUTTON = '¡Jugar!';
export const TEXT_RESET_BUTTON = 'Restablecer';
export const TEXT_ROUNDS_LABEL = 'Rondas';
export const TEXT_YOUR_NAME_LABEL = 'Tu nombre';



// **** ESTADOS **** //


// Ganadores de las rondas ("game.roundWinner")

export const WIN_COMPUTER = 'computer';
export const WIN_NOBODY = 'nobody';
export const WIN_TIE = 'tie';
export const WIN_USER = 'user';


// Identificadores ("settings.status.id" y "game.status.id")

export const ID_END = 'end';
export const ID_HAND_MOVEMENTS = 'hand-movements';
export const ID_INVALID_NAME = 'invalid-name';
export const ID_INVALID_ROUNDS = 'invalid-rounds';
export const ID_PAUSE = 'pause';
export const ID_ROUND_OUTCOME = 'round-outcome';
export const ID_START = 'start';
export const ID_VALID_DATA = 'valid-data';


// Jugadas ("game.userPlay" y "game.computerPlay")

export const PLAY_PAPER = 'paper';
export const PLAY_ROCK = 'rock';
export const PLAY_SCISSORS = 'scissors';


// Jugadores

export const PLAYER_COMPUTER = 'computer';
export const PLAYER_USER = 'user';


// Mensajes (errores y comentarios) ("settings.status.message" y "game.status.message")

export const ERR_EVEN_ROUNDS = 'Según el modo de juego, el número de rondas debe ser impar';
export const ERR_LONG_NAME = `Tu nombre no puede superar los ${CONFIG_YOUR_NAME_MAX_LENGTH} caracteres`;
export const ERR_MAX_ROUNDS = `El número máximo de rondas es ${CONFIG_ROUNDS_MAX_NUMBER}`;
export const ERR_MIN_ROUNDS = `El número mínimo de rondas es ${CONFIG_ROUNDS_MIN_NUMBER}`;
export const ERR_NOT_DIGITS = 'Solo podés ingresar dígitos';
export const ERR_VOID_NAME = 'Es necesario que ingreses un nombre';
export const ERR_VOID_ROUNDS = 'Es necesario que ingreses un número';

export const MSG_COMPUTER_POINT = '¡Punto para la computadora!';
export const MSG_COMPUTER_VICTORY = '¡Ganó la computadora! ¡A jugar!';
/*NE*/ const MSG_CONFIGURE_NAME_AND_ROUNDS = '¡Configurá tu nombre, las rondas y a jugar!';
export const MSG_DO_CLICK = 'Hacé clic en tu jugada';
export const MSG_ROCK_PAPER_SCISSORS = 'Piedra, papel, tijera...';
export const MSG_TIE_NO_POINTS = 'Empate. No se suman puntos';
export const MSG_TIE_NO_VICTORY = 'Empate. No hay ganador/a. ¡A jugar!';
export const MSG_TO_PLAY = '¡A jugar!';
export const MSG_USER_POINT = '¡Punto para vos!';
export const MSG_USER_VICTORY = '¡Ganaste! ¡A jugar!';


// Modos de juego ("settings.mode")

export const MODE_BEST_OF_OPTION = 'best-of';
export const MODE_PLAY_ALL_OPTION = 'play-all';


// Valores iniciales de los estados "settings" y "game"

export const STATE_SETTINGS = {
  mode: CONFIG_GAME_MODE,
  rounds: CONFIG_ROUNDS_NUMBER.toString(),
  status: {
    id: ID_START,
    message: MSG_CONFIGURE_NAME_AND_ROUNDS
  },
  yourName: ''
}

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



// **** ARREGLOS **** //

export const ARR_COMPUTER_SIGNAL_IMAGES = [
  { alt: ALT_PAPER_IMAGE, height: CONFIG_SIGNAL_IMAGES_HEIGHT, id: ID_COMPUTER_PREFIX + ID_PAPER_IMAGE, key: ID_PAPER_IMAGE, src: paperImage, width: CONFIG_SIGNAL_IMAGES_WIDTH },
  { alt: ALT_ROCK_IMAGE, height: CONFIG_SIGNAL_IMAGES_HEIGHT, id: ID_COMPUTER_PREFIX + ID_ROCK_IMAGE, key: ID_ROCK_IMAGE, src: rockImage, width: CONFIG_SIGNAL_IMAGES_WIDTH },
  { alt: ALT_SCISSORS_IMAGE, height: CONFIG_SIGNAL_IMAGES_HEIGHT, id: ID_COMPUTER_PREFIX + ID_SCISSORS_IMAGE, key: ID_SCISSORS_IMAGE, src: scissorsImage, width: CONFIG_SIGNAL_IMAGES_WIDTH }
];

export const ARR_ADDRESS_LINKS = [
  { href: 'https://maumaco.github.io/sobre-mi/', key: 1, linkText: 'Mau', previousText: 'Por ' },
  { href: 'https://www.famaf.unc.edu.ar/', key: 2, linkText: 'FAMAF', previousText: '' },
  { href: 'https://www.argentina.gob.ar/economia/conocimiento/argentina-programa', key: 3, linkText: 'Argentina Programa', previousText: '' },
  { href: 'https://github.com/maumaco/practico3/tree/main', key: 4, linkText: 'código', previousText: 'Ver ' }
];

export const ARR_MODE_OPTIONS = [
  { key: MODE_BEST_OF_OPTION, text: TEXT_BEST_OF_OPTION, value: MODE_BEST_OF_OPTION },
  { key: MODE_PLAY_ALL_OPTION, text: TEXT_PLAY_ALL_OPTION, value: MODE_PLAY_ALL_OPTION }
];

export const ARR_PLAYS = [
  PLAY_PAPER,
  PLAY_ROCK,
  PLAY_SCISSORS
];

export const ARR_USER_SIGNAL_IMAGES = [
  { alt: ALT_PAPER_IMAGE, height: CONFIG_SIGNAL_IMAGES_HEIGHT, id: ID_USER_PREFIX + ID_PAPER_IMAGE, key: ID_PAPER_IMAGE, src: paperImage, width: CONFIG_SIGNAL_IMAGES_WIDTH },
  { alt: ALT_ROCK_IMAGE, height: CONFIG_SIGNAL_IMAGES_HEIGHT, id: ID_USER_PREFIX + ID_ROCK_IMAGE, key: ID_ROCK_IMAGE, src: rockImage, width: CONFIG_SIGNAL_IMAGES_WIDTH },
  { alt: ALT_SCISSORS_IMAGE, height: CONFIG_SIGNAL_IMAGES_HEIGHT, id: ID_USER_PREFIX + ID_SCISSORS_IMAGE, key: ID_SCISSORS_IMAGE, src: scissorsImage, width: CONFIG_SIGNAL_IMAGES_WIDTH }
];
