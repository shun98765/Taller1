import { useState } from "react"
import '../Styles/Llamada.css'

export const Componentllamada = () => {

    var [totalpagar, set] = useState('')
    const [minutos, setllamada] = useState('')
    const Setlla = (event) => {
        setllamada(event.target.value)
    }


    const pago = (minutos) => {

        if (minutos < 3) {
            const valor = 100
            set([valor])

        }
        else {
            const excedente = (minutos - 3) * 50
            const valor = 100 + excedente
            set([valor])
        }




    }

    return (
        <>
            <div className="body2">

                <div className="titulo2">
                    <h1>2. Ingrese la duracion de la llamada en Minutos</h1>
                </div>

                <div className="input2">
                    <input type="text" onChange={(event) => Setlla(event)} value={minutos} class="form-control"/>
                    <p></p>
                    <button onClick={() => pago(minutos)} class="btn btn-primary btn-sm">valor a cobrar</button>
                    <p>
                        El valor a pagar es: {totalpagar} $</p>
                </div>
            </div>
        </>

    )

}