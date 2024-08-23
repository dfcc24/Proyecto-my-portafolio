import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">Main</Link>
      <Link to="/projects">Proyectos</Link>
      <Link to="/experience">Experiencia</Link>
    </header>
  );
};

export default Header;
