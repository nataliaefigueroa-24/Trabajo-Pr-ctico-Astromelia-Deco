import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <ul className="Footer-nav">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/galeria">Galería</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
      <div className="Footer-redes">
        <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
      </div>
    </footer>
  );
}

export default Footer;