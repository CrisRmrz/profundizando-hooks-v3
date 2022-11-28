import React from 'react'
import { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
      console.log('Componente de mensaje montado');
    
      return () => {
        console.log('Componente de mensaje desmontado');
      }
    }, [])
    

    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}
