import React from 'react'
import { useState } from 'react'

export const ComponenteEjercicio = () => {
    let anio 

    const recibir_anio = (p_anio) => {
        anio = p_anio;
       return  <h1>{añoActual}</h1>
    }   
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();
    
    let [anio_Actual, setFechaActual] = useState(añoActual);

    const sumar_anio = () => {
        setFechaActual (anio_Actual ++);
    }
    const restar_anio = () => {
        setFechaActual (anio_Actual --);
    }

  return (
    <div>ComponenteEjercicio
       <h1> {anio_Actual} </h1>
       <button className='btn_siguiente' onClick={sumar_anio}> <h2>Siguiente</h2> </button>
       <button className='btn_anterior' onClick={restar_anio}> <h2>Anterior</h2></button>
       
    </div>

  )
}
