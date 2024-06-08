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

    const cambiarNombre = e => {
        setNombre('Mi primer Hook')
    }
  return (
    <div>MiPrimerEstado
        <h3>Componente: Mi primer Componente</h3>
        <strong>{nombre}</strong>
        <button onClick={cambiarNombre}>Cambiar</button>

        
    </div>
  )
}
