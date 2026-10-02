function Galeria() {
  const imagenesGaleria = [
    { id: 1, url: '/src/assets/imagenes/almohadón2.png', alt: 'Almohadones' },
    { id: 2, url: '/src/assets/imagenes/camino2.jpg', alt: 'Camino de mesa' },
    { id: 3, url: '/src/assets/imagenes/manta 2.jpg', alt: 'Manta' },
    { id: 4, url: '/src/assets/imagenes/cama.png', alt: 'Cama decorada' },
  ];

  return (
    <section className="galeria-section">
      <h2>Galería de Fotos</h2>
      <div className="gallery-grid">
        {imagenesGaleria.map((img) => (
          <div key={img.id} className="gallery-item">
            <img src={img.url} alt={img.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Galeria;