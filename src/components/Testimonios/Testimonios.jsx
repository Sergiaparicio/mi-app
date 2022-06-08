import React, { useState } from 'react';
import Testimonio from './Testimonio/Testimonio';

const Testimonios = () => {
  const [testimonios, setTestimonios] = useState([
    {
      id: 1,
      nombre: 'Shawn',
      pais: 'Singapur',
      imagen: 'https://www.freecodecamp.org/static/Shawn-bf42c7b909dae3111d18a21870ee6ca5.png',
      cargo: 'Ingeniero de software',
      empresa: 'Amazon',
      testimonio: 'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida',
    },
    {
      id: 2,
      nombre: 'Sarah',
      pais: 'Nigeria',
      imagen: 'https://www.freecodecamp.org/static/Sarah-45de0e53b7b2520ebbac35c454b9748a.png',
      cargo: 'Ingeniera de software',
      empresa: 'ChatDesk',
      testimonio: 'freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble',
    },
    {
      id: 3,
      nombre: 'Emma',
      pais: 'Reino Unido',
      imagen: 'https://www.freecodecamp.org/static/Emma-5a662db9bcf55809a1fefb2ea17634bc.png',
      cargo: 'Ingeniera de software',
      empresa: 'Amazon',
      testimonio: 'Siempre me ha costado aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify',
    },
  ]);

  return (
    <div className="testimonio">
      {testimonios.map((testimonio) => {
        return (
        <Testimonio key={testimonio.id} nombre={testimonio.nombre} pais={testimonio.pais} imagen={testimonio.imagen} cargo={testimonio.cargo} empresa={testimonio.empresa} testimonio={testimonio.testimonio}/>
        );
    })}
  </div>
  );
};


export default Testimonios;