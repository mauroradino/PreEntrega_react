import React from 'react'
import './ItemListComponent.css'
import imagen from '../assets/imagenes/imagen.png';

const ItemListComponent = (props) => {
  return (
    <div style={{backgroundColor: props.back, display: "flex"}}>
      <img className='imagenInicio' src={imagen} alt='imagen de inico'/>
      <h2>{props.saludo}</h2>
    </div>
  )
}

export default ItemListComponent
