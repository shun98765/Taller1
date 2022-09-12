import { useState } from "react"
import '../Styles/Impares.css'
export const Componentimpares = () => {

    var [lista, set] = useState([])
    const [numero, setnum1] = useState('')



    const Setnum = (event) => {
        setnum1(event.target.value)

    }



    const numerosImpares = (numero) => {


        for (var i = 0; i < numero; i++) {
            if (i % 2 != 0) {
                var impar = i
                lista.push(i)

            }

        }
        set([lista])
    }

    return (

        <>
            <div className="body6">
                <div className="titulo6">
                    <h1>6. Ingrese un número</h1>
                </div>
                
                <div className="input6">
                    <input type="text" onChange={(event) => Setnum(event)} value={numero} placeholder="Número" class="form-control"/>
                    <p></p>
                    <button onClick={() => numerosImpares(numero)} class="btn btn-primary btn-sm">¡Boom! Magia</button>
                    <p>
                        Los números impares menores que {numero} son: {lista} </p>
                </div>
               

            </div>
        </>

    )
}
