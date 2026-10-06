import Card from '../components/Cards';


import prod1 from '../assets/almohadón1.png';
import prod2 from '../assets/almohadón2.png';
import prod3 from '../assets/almohadón3.jpg';
import prod4 from '../assets/manta 1.jpg';
import prod5 from '../assets/manta 2.jpg';
import prod6 from '../assets/manta 3.jpg';
import prod7 from '../assets/manta X3.jpg';
import prod8 from '../assets/camino1.jpg';
import prod9 from '../assets/camino2.jpg';
import prod10 from '../assets/camino4.jpg';
import prod11 from '../assets/camino5.jpg';
import prod12 from '../assets/camino3.jpg';

function Productos() {
  const listaProductos = [
    {
    id: 1,
    titulo: 'Almohadón Floral',
    descripcion: 'Medidas: 50x30cm Material: Tusor de algodón con tejido floral artesanal. Funda desmontable con cierre oculto. Incluye relleno.',
    imagen: prod1,
    textoBoton: 'Consultar',
    linkBoton: '/contacto'
  },
    {
      id: 2,
      titulo: 'Almohadón Natural',
      descripcion: 'Medidas: 50x30 cm Material: Tusor premium con detalles de puntilla de algodón.Incluye relleno',
      imagen: prod2,
      textoBoton: 'Consultar',
      linkBoton: '/contacto'
    },
    {
      id: 3,
      titulo: 'Almohadón Waffle',
      descripcion: 'Descripción del producto 3Medidas: 50x50 cm Material: Tela waffle de algodón.Funda desmontable e incluye relleno.',
      imagen: prod3,
      textoBoton: 'Consultar',
      linkBoton: '/contacto'
    },
     {
    id: 4,
    titulo: 'Manta Boho Natural',
    descripcion:'Tejido suave con flecos y diseño en líneas negras. Medidas: 130x170 cm. Material: 100% algodón.',
    imagen: prod4,
    textoBoton: 'Consultar',
    linkBoton: '/contacto'
  },
    {
      id: 5,
      titulo: 'Manta Rayas Tierra',
      descripcion: 'Combinación de tonos neutros con flecos decorativos. Medidas: 130x170 cm. Material: algodón y poliéster.',
      imagen: prod5,
      textoBoton: 'Consutar',
      linkBoton: '/contacto'
    },
    {
      id: 6,
      titulo: 'Manta Encaje Vintage',
      descripcion: 'Detalle de encaje y flecos. Medidas: 125x170 cm. Material: algodón con terminaciones artesanales.',
      imagen: prod6,
      textoBoton: 'Consultar',
      linkBoton: '/contacto'
    } ,
    
    {
    id: 7,
    titulo: 'Manta Tejida Texturas',
    descripcion: 'Diseño tejido en tonos neutros. Medidas: 130x180 cm. Material: mezcla de algodón y lino. Perfecta para decorar camas, sillones o sofás',
    imagen: prod7,
    textoBoton: 'Consultar',
    linkBoton: '/contacto'
  },
    {
      id: 8,
      titulo: 'Camino de Mesa Lino Encaje',
      descripcion: 'Confeccionado en lino con terminación de encaje de algodón. Medidas: 40 x 140 cm. Material: Lino y algodón.',
      imagen: prod8,
      textoBoton: 'Consultar',
      linkBoton: '/contacto'
    },
    {
      id: 9,
      titulo: 'Camino de Mesa Encaje Clásico',
      descripcion: 'Elaborado íntegramente en encaje de algodón de motivos florales. Medidas: 40 x 150 cm. Material: 100% algodón.',
      imagen: prod9,
      textoBoton: 'Consultar',
      linkBoton: '/contacto'
    },
     {
    id: 10,
    titulo: 'Camino de Mesa Crochet Aqua',
    descripcion:'Tejido a crochet en tonos naturales Medidas: 35 x 140 cm. Material: Hilo de algodón. Pieza realizada artesanalmente.',
    imagen: prod10,
    textoBoton: 'Consultar',
    linkBoton: '/contacto'
  },
    {
      id: 11,
      titulo: 'Camino de Mesa Crochet Natural',
      descripcion:'Tejido de inspiración artesanal. Medidas: 50x30 cm Material: Tusor y detalles tejidos. Funda desmontable. Incluye relleno.',
    imagen: prod11,
    textoBoton: 'Consultar',
    linkBoton: '/contacto'
    },
    {
      id: 12,
      titulo: 'Camino de Mesa Encaje Floral',
      descripcion: 'Medidas: 40 x 140 cm. Material: Algodón tejido. Ideal para realzar mesas de comedor, consolas o muebles auxiliares.',
      imagen: prod12,
      textoBoton: 'Consultar',
      linkBoton: '/contacto'
    } ,  
   
  ];

  return (
    <main className="main-section">
      <h2>Nuestros Productos</h2>
      <p>Catálogo de piezas exclusivas para el hogar.</p>

      <div className="cards-grid">
        {listaProductos.map((prod) => (
          <Card
            key={prod.id}
            titulo={prod.titulo}
            descripcion={prod.descripcion}
            imagen={prod.imagen}
            textoBoton={prod.textoBoton}
            linkBoton={prod.linkBoton}
          />
        ))}
      </div>
    </main>
  );
}

export default Productos;