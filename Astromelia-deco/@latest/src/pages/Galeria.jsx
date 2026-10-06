import Gallery from '../components/Gallery';

import almohadon1 from '../assets/almohadón1.png';
import almohadon2 from '../assets/almohadón2.png';
import almohadon3 from '../assets/almohadón3.jpg';
import camino5 from '../assets/camino5.jpg';
import cama from '../assets/cama.png';
import camino1 from '../assets/camino1.jpg';
import camino4 from '../assets/camino4.jpg';
import mantaX3 from '../assets/manta x3.jpg';

function Galeria() {
  const misImagenes = [
    { url: almohadon1, alt: 'Decoración Astromelia 1' },
    { url: almohadon2, alt: 'Decoración Astromelia 2' },
    { url: almohadon3, alt: 'Decoración Astromelia 3' },
    { url: camino5, alt: 'Decoración Astromelia 4' },
    { url: cama, alt: 'Decoración Astromelia 5' },
    { url: camino1, alt: 'Decoración Astromelia 6' },
    { url: camino4, alt: 'Decoración Astromelia 7'},
    { url: mantaX3, alt: 'Decoración Astromelia 8' }
  ];

  return (
    <main>
      <h1 className="page-title">Nuestra Galería</h1>
      
      <section className="main-section galeria-section">
        <Gallery imagenes={misImagenes} />
      </section>
    </main>
  );
}

export default Galeria;