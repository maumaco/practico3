// Definición del componente

export default function PlayerSignals({ images, onClick }) {

  return (
    <p>
      {images.map(image =>
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          id={image.id}
          key={image.key}
          onClick={onClick}
        />
      )}
    </p>
  );
}
