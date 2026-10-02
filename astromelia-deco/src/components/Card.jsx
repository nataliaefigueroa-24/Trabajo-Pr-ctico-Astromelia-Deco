function Card({ titulo, imagen, descripcion, precio }) {
  return (
    <div className="card">
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      {precio && <span className="precio">${precio}</span>}
    </div>
  );
}

export default Card;
