import React from 'react';
import '../styles/Inicio.css';
import avatar from '../perfil-avatar-hombre-icono-redondo_24640-14044.jpg';

const Inicio = () => {
  return (
    <div id="inicio">
      <section id="presentacion">
        <h1>¡Hola, bienvenido/a a mi sitio web!</h1>
        <h2>
          <em>Mi nombre es Dario, y soy Programador Front-End.</em>
        </h2>
      </section>
      <section id="about">
        <h2 className="caption">Sobre mí</h2>
        <section>
          <p>
            Desde pequeño soy un amante de todo lo que es la tecnología, tengo
            conocimientos en HTML, JavaScript, y React Js, entre otros. Tambien
            creé proyectos en el lado del Back-End, con Node.js.
          </p>
        </section>
        <section>
          <img src={avatar} alt="imagen" />
        </section>
      </section>
      <section id="estudios">
        <h2 className="caption">Estudios</h2>
        <div>
          <h4>Primaria</h4>
          <h4>Secundaria</h4>
        </div>
        <div>
          <h4>HTML</h4>
          <h4>JavaScript</h4>
          <h4>React Js</h4>
          <h4>Back-End</h4>
        </div>
      </section>
      <section id="projects">
        <h2 className="caption">Proyectos</h2>
        <div>
          <h4>Proyecto 1</h4>
          <h4>Proyecto 2</h4>
          <h4>Proyecto 3</h4>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
