// Definición del componente

export default function Button({ disabled, onClick, text }) {
  return (
    <button type="button" disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}
