import './App.css';
import Testimonios from './components/Testimonios/Testimonios';

function App() {
  return (
    <div className="App flex flex-warp items-center justify-center text-center">
      <div className='contenedor-principal min-h-[600px] flex flex-warp flex-col items-center justify-center text-center object-center gap-12'>
        <h1 className='max-w-[940px] text-4xl font-lato font-semibold leading-[1.1] my-[40px]'>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonios />
      </div>
    </div>
  );
}

export default App;