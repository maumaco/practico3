// Componentes importados

import Label from './Label.js';



// Definición del componente

export default function Select({ labelText, id, value, disabled, onChange, options }) {
  return(
    <>
      {labelText &&
        <Label
          htmlFor={id}
          text={labelText}
        />
      }

      <select
        id={id}
        value={value}
        disabled={disabled}
        onChange={onChange}
      >
        {options.map(option =>
          <option
            value={option.value}
            key={option.key}
          >
            {option.text}
          </option>
        )}
      </select>
    </>
  );
}
