import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App flex flex-warp items-center justify-center text-center">
      <div className='contenedor-principal min-h-[600px] flex flex-warp flex-col items-center justify-center text-center object-center gap-12'>
        <h1 className=' max-w-[940px] text-4xl font-lato font-semibold leading-[1.1] my-[40px]'>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
         <Testimonio 
        nombre='Shawn Wang' 
        pais='Singapur' 
        imagen='shawn' 
        cargo='Ingeniera de Software'
        empresa='Amazon' 
        testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida ' />
        <Testimonio 
        nombre='Sara Chima' 
        pais='Nigeria' 
        imagen='sarah' 
        cargo='Ingeniera de Software'
        empresa='ChatDesk' 
        testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble' />
        <Testimonio 
        nombre='Emma Bostian' 
        pais='Suecia' 
        imagen='emma' 
        cargo='Ingeniera de Software'
        empresa='Spotify' 
        testimonio='Siempre me ha costado aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify' />
      </div>
    </div>
  );
}

export default App;