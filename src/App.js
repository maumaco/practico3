import AppHeading from './components/AppHeading.js';


import { TEXT_APP_HEADING } from './constants.js';


export default function App() {
  return (
    <header>
      <AppHeading
        text={TEXT_APP_HEADING}
      />
    </header>
  );
}
