import { useState } from "react"
import '../Styles/NumeroAleatorio.css'

export const ComponentNumeroAleatorio = () => {
    const [numeros, addnum] = useState([])
    const [sal, set] = useState([])
    const [num, setSal] = useState('')

    const onNum = (event) => {
        setSal(event.target.value)
    }
    const generarArray = () => {
        for (var i = 0; i <= 9; i++) {
            let valor = Math.floor(Math.random() * 10)
            numeros.push(valor)
        }
        console.log([numeros])
        console.log(numeros.length)

    }

    const imprimir = ([numeros], num) => {
        if (num < 0) {
            const sal = 'Ingrese un numero positivo'
            set(sal)
        } else {
            const newNumeros = []
            for (var i = 0; i <= 10; i++) {
                var element = numeros[i]
                var list = element / num
                newNumeros.push(list)

            }
            const sal = 'Los numeros dividos son' + [newNumeros]
            console.log(newNumeros)
            set(sal)
        }


    }

    return (

        <>
            <div className="body8">
                <div className="titulo8">
                    <h1>8. Ingrese un número de 1 a 10</h1>
                </div>
               
               <div className="input8">
                <button onClick={() => generarArray()} class="btn btn-primary btn-sm">Generar 10 numeros aleatorios</button>
                    <p>el arreglo original es {numeros}</p>
                    <p></p>
                    <input type="text" onChange={(event) => onNum(event)} value={num} placeholder="Ingrese número" class="form-control" />

                    <p></p>
                    <button onClick={() => imprimir([numeros], num)} class="btn btn-primary btn-sm">Agregar aumento</button>
                    <p> {sal} </p>
               </div>
              
            </div>
        </>

    )
}
