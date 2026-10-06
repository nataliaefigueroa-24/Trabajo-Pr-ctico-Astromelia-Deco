function Gallery({ imagenes = [] }) {
  return (
    <div className="cards-grid">
      {imagenes.map((img, index) => (
        <div key={index} className="card">
          <img 
            src={typeof img === 'string' ? img : img.url} 
            alt={img.alt || 'Imagen de Galería'} 
          />
          {img.titulo && (
            <div className="Card-body">
              <h3>{img.titulo}</h3>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Gallery;