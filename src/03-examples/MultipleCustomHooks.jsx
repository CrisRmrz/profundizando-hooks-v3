import React from 'react'
import { useCounter } from '../01-useState/hooks/useCounter';
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const {counter, increment, decrement, reset} = useCounter(1);

    const {data, isLoading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);



    return (
        <>
            <h1>Breaking bad Quotes</h1>
            {
                (isLoading)
                ?
                <div>Informacion cargando...</div>
                :
                data.map( res => {
                    return(<h2 key={ res.quote_id } > { JSON.stringify(res) } </h2>)
                })
            }

            <button onClick={ () => increment(1) }>Siguiente</button>
            <button onClick={ () => decrement(1) }>Anterior</button>
            <button onClick={ () => reset() }>Volver al primero</button>

        </>
    )
}
