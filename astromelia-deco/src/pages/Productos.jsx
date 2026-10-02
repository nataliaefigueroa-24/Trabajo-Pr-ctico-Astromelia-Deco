import Card from '../components/Card';

function Productos() {
  const listaProductos = [
    { id: 1, titulo: 'Almohadón Deco', imagen: '/src/assets/imagenes/almohadón1.png', descripcion: 'Almohadón suave tejido a mano.', precio: '4500' },
    { id: 2, titulo: 'Camino de Mesa', imagen: '/src/assets/imagenes/camino1.jpg', descripcion: 'Camino de mesa rústico de algodón.', precio: '6200' },
    { id: 3, titulo: 'Manta de Sillón', imagen: '/src/assets/imagenes/manta 1.jpg', descripcion: 'Manta abrigo para sillón o cama.', precio: '8900' }
  ];

  return (
    <section className="productos-section">
      <h2>Nuestros Productos</h2>
      <div className="productos-grid">
        {listaProductos.map((prod) => (
          <Card 
            key={prod.id} 
            titulo={prod.titulo} 
            imagen={prod.imagen} 
            descripcion={prod.descripcion} 
            precio={prod.precio} 
          />
        ))}
      </div>
    </section>
  );
}

export default Productos;