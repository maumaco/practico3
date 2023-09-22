// Componentes

import PlayerHeading from './PlayerHeading.js';
import PlayerScore from './PlayerScore.js';
import PlayerSignals from './PlayerSignals.js';



// Definición del componente

export default function Player({ headingText, scoreValue, signalsImages, signalsOnClick }) {
  return (
    <div>
      <PlayerHeading
        text={headingText}
      />

      <PlayerScore
        value={scoreValue}
      />

      <PlayerSignals
        images={signalsImages}
        onClick={signalsOnClick}
      />
    </div>
  );
}
