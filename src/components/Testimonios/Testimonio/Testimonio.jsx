import React from 'react';

const testimonio = (props) => {
  return (
    <div className='mb-12'>
      <div className='testimonio flex items-center justify-center bg-white w-[1170px] h-[368px] mx-[50px] shadow-lg'>
        <img className='imagen-testimonio h-full w-auto' src={props.imagen} />
        <div className='contenedor-texto-testimonio text-center p-[40px] font-lato font-semibolt leading-[1.5rem]'>
        <p className='nombre-testimonio text-xl'>
        <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio text-xl mt-[15px] pb-[30px]'> 
        {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio text-lg text-justify'>"
        {props.testimonio}".
        </p>
        </div>
      </div>
    </div>
  );
};

export default testimonio