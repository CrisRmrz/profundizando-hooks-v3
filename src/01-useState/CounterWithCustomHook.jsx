import React from 'react'
import { useCounter } from './hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { counter,increment,decrement,reset } = useCounter(50);

    return (
        <>
            <h1>Counter with hook: { counter } </h1>
            <hr />

            <button className='btn btn-primary' onClick={ () => increment() }>Sumar</button>
            <button className='btn btn-primary' onClick={ () => decrement() }>Restar</button>
            <button className='btn btn-primary' onClick={ () => reset() }>Resetear</button>
        </>
    )
}
