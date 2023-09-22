// Definición del componente

export default function Address({ links }) {
  return (
    <address>
      {links.map(link =>
        <p key={link.key}>
          {link.previousText}
          <a
            href={link.href}
          >
            {link.linkText}
          </a>
        </p>
      )}
    </address>
  );
}
