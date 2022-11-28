import React, { memo } from 'react'

export const ShowIncement = memo(({increment}) => {

    console.log('El show increment se volvio a generar')

    return (
        <button className='btn btn-primary' onClick={ () => increment(5) }>Incrementar</button>
    )
})