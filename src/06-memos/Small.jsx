import {memo} from 'react'

export const Small = memo(({ value }) => { //Se pone memo y se encierra todo el componente entre parentesis

    console.log('El Small se volvio a dibujar')

    return (
        <small> {value} </small>
    )
})
