Astromelia Deco — Trabajo Práctico React

Aplicación web Single Page Application (SPA) desarrollada para *Astromelia Deco. La arquitectura está basada en componentes reutilizables en **React*, gestionando la navegación dinámica y el estado de la interfaz de manera eficiente.

---
Requisitos del TP

- *Layout Dinámico:* Navegación persistente (Navbar y Footer) mediante <Outlet /> de react-router-dom.
- *Rutas Anidadas:* Estructura modular de rutas para las páginas de Inicio, Productos, Galería y Contacto.
- *Formulario Controlado:* Implementación de useState en Contacto.jsx para gestionar el estado de los inputs.
- *Manejo de Eventos:*
  - onChange: Captura y muestra los eventos de cambio en la consola del navegador.
  - onSubmit: Previene la recarga por defecto con e.preventDefault() y envía los datos por consola.
  - onReset: Limpieza de campos y registro del evento.

---

 Estructura del Proyecto

```text
src/
├── components/
│   ├── Contacto.jsx    # Formulario controlado con useState
│   ├── Footer.jsx      # Pie de página con enlaces SPA (<Link>)
│   ├── Layout.jsx      # Contenedor principal con Navbar, Outlet y Footer
│   └── Navbar.jsx      # Barra de navegación principal
├── pages/
│   ├── Galeria.jsx     # Sección de galería
│   ├── Home.jsx        # Página de inicio
│   └── Productos.jsx   # Catálogo de productos
├── App.css             # Estilos globales y ajustes de layout
├── App.jsx             # Configuración central de rutas (React Router)
└── main.jsx            # Punto de entrada renderizando BrowserRouter