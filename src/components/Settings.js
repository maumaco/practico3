// React

import { useContext } from 'react';


// Contextos importados

import { MainContext } from '../App.js';


// Componentes importados

import Select from './Select.js';
import TextInput from './TextInput.js';


// Constantes importadas

import {
  ARR_MODE_OPTIONS,
  ID_INVALID_NAME,
  ID_INVALID_ROUNDS,
  ID_MODE_SELECT,
  ID_PAUSE,
  ID_ROUNDS_INPUT,
  ID_START,
  ID_YOUR_NAME_INPUT,
  PH_ROUNDS_INPUT,
  PH_YOUR_NAME_INPUT,
  SIZE_ROUNDS_INPUT,
  SIZE_YOUR_NAME_INPUT,
  TEXT_MODE_LABEL,
  TEXT_ROUNDS_LABEL,
  TEXT_YOUR_NAME_LABEL
} from '../constants/constants.js';


// Funciones importadas

import {
  sanitizeTextInputValue,
  searchModeValueErrors,
  searchRoundsValueErrors,
  searchYourNameValueErrors,
  setSettingsStatus
} from '../functions/functions.js';



// Definición del componente

export default function Settings() {
  const { settings, setSettings } = useContext(MainContext);

  // Permite que el valor de la entrada "Tu nombre" pueda ser cambiado
  function handleYourNameChange(e) {
    setSettings({ ...settings, yourName: e.target.value });
  }

  // Obtiene el nombre del usuario y establece el estado de la configuración según su validez
  // status.id: 'invalid-name', 'valid-data'
  function handleYourNameBlur(e) {
    const sanitizedYourNameValue = sanitizeTextInputValue(e.target.value);

    setSettings({
      ...settings,
      status: setSettingsStatus(
        searchYourNameValueErrors(sanitizedYourNameValue),
        ID_YOUR_NAME_INPUT
      ),
      yourName: sanitizedYourNameValue
    });
  }

  // Permite que el valor de la entrada "Rondas" pueda ser cambiado
  function handleRoundsChange(e) {
    setSettings({ ...settings, rounds: e.target.value });
  }

  // Obtiene el número de rondas y establece el estado de la configuración según su validez
  // status.id: 'invalid-rounds', 'valid-data'
  function handleRoundsBlur(e) {
    const sanitizedRoundsValue = sanitizeTextInputValue(e.target.value);

    setSettings({
      ...settings,
      status: setSettingsStatus(
        searchRoundsValueErrors(sanitizedRoundsValue, settings.mode),
        ID_ROUNDS_INPUT
      ),
      rounds: sanitizedRoundsValue
    });
  }

  // Permite que el valor del menú "Modo" pueda ser cambiado
  // Obtiene el modo de juego y establece el estado de la configuración según su validez
  // status.id: 'invalid-rounds', 'valid-data'
  function handleModeChange(e) {
    setSettings({
      ...settings,
      status: setSettingsStatus(
        searchModeValueErrors(settings.rounds, e.target.value),
        ID_MODE_SELECT
      ),
      mode: e.target.value
    });
  }

  return (
    <>
      <p>
        <TextInput
          labelText={TEXT_YOUR_NAME_LABEL}
          id={ID_YOUR_NAME_INPUT}
          value={settings.yourName}
          placeholder={PH_YOUR_NAME_INPUT}
          size={SIZE_YOUR_NAME_INPUT}
          // Se deshabilita si el número de rondas es inválido o la configuración está en pausa
          disabled={
            settings.status.id === ID_INVALID_ROUNDS ||
            settings.status.id === ID_PAUSE
          }
          onChange={handleYourNameChange}
          onBlur={handleYourNameBlur}
        />
      </p>

      <p>
        <TextInput
          labelText={TEXT_ROUNDS_LABEL}
          id={ID_ROUNDS_INPUT}
          value={settings.rounds}
          placeholder={PH_ROUNDS_INPUT}
          size={SIZE_ROUNDS_INPUT}
          // Se deshabilita si la configuración está en inicio o pausa o el nombre es inválido
          disabled={
            settings.status.id === ID_START ||
            settings.status.id === ID_INVALID_NAME ||
            settings.status.id === ID_PAUSE
          }
          onChange={handleRoundsChange}
          onBlur={handleRoundsBlur}
        />

        {' '}

        <Select
          labelText={TEXT_MODE_LABEL}
          id={ID_MODE_SELECT}
          value={settings.mode}
          // Se deshabilita si la configuración está en inicio o pausa o el nombre es inválido
          disabled={
            settings.status.id === ID_START ||
            settings.status.id === ID_INVALID_NAME ||
            settings.status.id === ID_PAUSE
          }
          onChange={handleModeChange}
          options={ARR_MODE_OPTIONS}
        />
      </p>
    </>
  );
}
