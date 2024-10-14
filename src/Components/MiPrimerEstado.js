import { useState } from "react"
import React from 'react'

export const MiPrimerEstado = () => {
    /*
    Problematica

    let nombre = 'Augusto Almiron'

    const cambiarNombre = e =>{
        nombre = 'Paquito Fernandez'
    }*/

    let [nombre,setNombre] = useState('Augusto Almiron');

    const cambiarNombre = (e,nombreFijo) => {
        setNombre(nombreFijo);
    }

    const sumar_anio = () => {
        
    }
    const restar_anio = () => {
        
    }
  return (
    <div>MiPrimerEstado
        <h3>Componente: Mi primer Componente</h3>
        <strong>{nombre}</strong>
        <input type="text" onKeyUp={e => cambiarNombre(e, e.target.value)} placeholder="Cambia el nombre"></input>
        <button onClick={cambiarNombre}>Cambiar</button>

        
    </div>
  )
}
