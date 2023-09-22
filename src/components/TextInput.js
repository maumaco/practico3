// Componentes

import Label from './Label.js';



// Definición del componente

export default function TextInput({ labelText, id, value, placeholder, size, disabled, onChange, onBlur }) {
  return(
    <>
      {labelText &&
        <Label
          htmlFor={id}
          text={labelText}
        />
      }

      <input
        type="text"
        id={id}
        value={value}
        placeholder={placeholder}
        size={size}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
}
