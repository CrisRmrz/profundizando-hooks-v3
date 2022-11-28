import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFromState] = useState({username: '', email: ''})

    const { username, email } = formState;

    const onInputChange = ({target}) => {

        const {name, value} = target; //Me tira por ejemplo el name de mi unput como el username, y el value el valor que tiene
        setFromState({
            ...formState,
            [ name ]: value //Propiedades computadas
        })
    }

    useEffect(() => {

        //console.log(formState.username)

    }, [formState])
    

    return (
        <>
            <h1>SimpleForm</h1>
            <hr />

            <input
                type="text"
                className='form-control'
                placeholder='Username...'
                name='username'
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className='form-control mt-2'
                placeholder='Correo...'
                name='email'
                value={email}
                onChange={onInputChange}
            />

            {
                username === 'crisrmrz' && <Message />
            }

        </>
    )
}
