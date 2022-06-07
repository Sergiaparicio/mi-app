import React from 'react';

function Testimonio(props) {
  return (
    <div className='testimonio'>
        <img className='imagen-testimonio'
        src={require('../image/testimonio-emma.png')}
        alt="Foto de Emma" />
        <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>(props) Emma Bostian en Suecia </p>
        <p className='cargo-testimonio'>(props) Ingeniera de Software en Spotify</p>
        <p className='texto-testimonio'>(props) Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nostrum eum sapiente accusantium placeat quis repudiandae numquam id aliquam adipisci provident, quaerat in nisi odit iste perferendis neque amet eaque?</p>
        </div>
    </div>
  )
}

export default Testimonio;