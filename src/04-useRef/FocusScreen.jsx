import { useRef } from "react"

export const FocusScreen = () => {

    const inputElement = useRef(); //Lo que hace este hook es poner el hook al elemento html que le pongamos el ref
    
    const focusInput = () => {
        inputElement.current.select(); //Este subraya toda la palabra del input para borrar
        //inputElement.current.focus(); //Este solo pone el cursor encima
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />

            <input type="text" placeholder="Ingrese su nombre" className="form-control" ref={inputElement}/>
            
            <button className="btn btn-primary mt-2" onClick={ focusInput }>Set Focus</button>
        </>
    )
}
