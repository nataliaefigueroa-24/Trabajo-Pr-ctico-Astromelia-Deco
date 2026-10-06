import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/Logo astromelia.png'


function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
      
      </div>
      <div>
        <img src={logoImg} alt="Logo astromelia" style={{height: '80px'}}/>
      </div>
      
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0 }}>
        <li><Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Inicio</Link></li>
        <li><Link to="/productos" style={{ textDecoration: 'none', color: '#333' }}>Productos</Link></li>
        <li><Link to="/galeria" style={{ textDecoration: 'none', color: '#333' }}>Galería</Link></li>
        <li><Link to="/contacto" style={{ textDecoration: 'none', color: '#333' }}>Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar