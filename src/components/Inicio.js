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
      <h2 className="caption">Sobre mí</h2>
      <section id="about">
        <section>
          <p>
            Desde pequeño soy un amante de todo lo que es la tecnología. Mi
            primer contacto con el mundo de la programación fue mientras estaba
            cursando la secundaria, donde me enseñaron C++ y Assembler, desde
            ese momento me enamoré de todo lo referido a este mundo.
            Actualmente, tengo conocimientos en HTML, JavaScript, y React Js,
            entre otros. Tambien creé proyectos en el lado del Back-End, con
            Node.js.
          </p>
        </section>
        <section>
          <img src={avatar} alt="imagen" />
        </section>
      </section>
      <h2 className="caption">Estudios y conocimientos</h2>
      <section id="estudios">
        <div>
          <h3>Formación</h3>
          <p>
            <strong>
              Secundaria finalizada con titulo en técnico electrónico.
            </strong>
          </p>
          <p>
            Técnica N°1 de Merlo Ingeniero Francisco Urondo.
            <em> 2013 - 2019</em>
          </p>
          <h4>HTML</h4>
          <p>Coderhouse</p>
          <h4>JavaScript</h4>
          <p>Coderhouse</p>
          <h4>React Js</h4>
          <p>Coderhouse</p>
          <h4>Back-End</h4>
          <p>Coderhouse</p>
        </div>
        <div>
          <h3>Soft Skills</h3>
          <ul>
            <li>Proactivo</li>
            <li>Trabajo en equipo</li>
            <li>Resiliente</li>
            <li>Responsable</li>
          </ul>
        </div>
        <div>
          <h3>Conocimientos</h3>
          <img src={avatar} alt="icono" style={{ width: '40px' }} />
          <img src={avatar} alt="icono" style={{ width: '40px' }} />
          <img src={avatar} alt="icono" style={{ width: '40px' }} />
          <img src={avatar} alt="icono" style={{ width: '40px' }} />
          <img src={avatar} alt="icono" style={{ width: '40px' }} />
          <img src={avatar} alt="icono" style={{ width: '40px' }} />
        </div>
      </section>
      <h2 className="caption">Proyectos</h2>
      <section id="projects">
        <div>
          <h4>Proyecto 1</h4>
        </div>
        <div>
          <h4>Proyecto 2</h4>
        </div>
        <div>
          <h4>Proyecto 3</h4>
        </div>
        <div>
          <h4>Proyecto 4</h4>
        </div>
        <div>
          <h4>Proyecto 5</h4>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
