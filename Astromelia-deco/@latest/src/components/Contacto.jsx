import { useState } from 'react';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    motivo: '',
    tipoCliente: 'particular',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    console.log(`Campo modificado - ${name}:, value`);

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Formulario enviado con éxito:', formData);
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      email: '',
      motivo: '',
      tipoCliente: 'particular',
      mensaje: ''
    });
    
    console.log('Formulario limpiado/reseteado');
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <div className="form-group">
        <label htmlFor="nombre">Nombre completo</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="motivo">Motivo de consulta</label>
        <select
          id="motivo"
          name="motivo"
          value={formData.motivo}
          onChange={handleChange}
        >
          <option value="">Selecciona una opción</option>
          <option value="presupuesto">Presupuesto</option>
          <option value="productos">Consulta de productos</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div className="form-group">
        <label>Tipo de cliente</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="tipoCliente"
              value="particular"
              checked={formData.tipoCliente === 'particular'}
              onChange={handleChange}
            />
            Particular
          </label>
          <label>
            <input
              type="radio"
              name="tipoCliente"
              value="empresa"
              checked={formData.tipoCliente === 'empresa'}
              onChange={handleChange}
            />
            Empresa
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows="5"
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="form-buttons">
        <button type="submit">Enviar</button>
        <button type="reset">Limpiar</button>
      </div>
    </form>
  );
}

export default Contacto;