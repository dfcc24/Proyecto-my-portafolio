import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <header>
        <Link to="/projects">Proyectos</Link>
        <Link to="/experience">Experiencia</Link>
      </header>
      <h1>Bienvenido a mi Portafolio</h1>
      <p>Explora mis proyectos y experiencia.</p>
    </div>
  );
};

export default MainPage;
