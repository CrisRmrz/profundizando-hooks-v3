
import { useCallback } from "react";
import { useState } from "react";
import { ShowIncement } from "./ShowIncement";


export const CallbackHook = () => {

    const [ counter, setCounter ] = useState(10);

    const incrementFather = useCallback(
      (value) => {
        setCounter( (c) => c + value )
      },
      [],
    )
    

    return (
        <>
            <h1>useCallback Hook: {counter} </h1>
            <hr />

            <ShowIncement increment={ incrementFather } />
        </>
    )
}
