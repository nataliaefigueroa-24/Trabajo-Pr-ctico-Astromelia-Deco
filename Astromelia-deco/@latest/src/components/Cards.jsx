function Card({ titulo, descripcion, imagen, textoBoton, linkBoton }) {
  return (
    <div className="card">
      {imagen && <img src={imagen} alt={titulo || 'Imagen de card'} />}
      <div className="Card-body">
        {titulo && <h3>{titulo}</h3>}
        {descripcion && <p>{descripcion}</p>}
        {textoBoton && (
          <a href={linkBoton || "#"} className="btn btn-primario">
            {textoBoton}
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;