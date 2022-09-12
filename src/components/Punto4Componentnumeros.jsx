import { useState } from "react"
import { Componentlistanumeros } from "./Punto5ComponentLista"
import '../Styles/Numeros.css'

export const Componentnumeros = () => {

    var [sal, set] = useState('')
    const [pnumero, setnum1] = useState('')
    const [snumero, setnum2] = useState('')
    const [tnumero, setnum3] = useState('')



    const [categories, addCat] = useState([])

    const Set1 = (event) => {
        setnum1(event.target.value)
    }

    const Set2 = (event) => {
        setnum2(event.target.value)
    }
    const Set3 = (event) => {
        setnum3(event.target.value)
    }

    const onComponentlistanumeros = (category) => {
        addCat([...categories, category])
    }

    const numerosIguales = () => {
        addCat([...categories, pnumero, snumero, tnumero ])

        if (pnumero == snumero == tnumero) {
            const nums = 'Hay ' + 3 + ' números iguales.'
            set(nums)
        }

        else if ((pnumero == snumero) || (pnumero == tnumero) || (snumero == tnumero)) {
            const nums = 'Hay ' + 2 + ' números iguales.'
            set(nums)
        }

        else if (pnumero != snumero != tnumero) {
            const nums = 'No hay números iguales'
            set(nums)
        }
    }

    return (

        <>
            <div className="body4">
                <div className="titulo4">
                    <h1>4. Ingrese 3 números</h1>
                </div>
                
                <div className="input4">
                    <input type="text" onChange={(event) => Set1(event)} value={pnumero} placeholder="Primer número" class="form-control" />
                    <input type="text" onChange={(event) => Set2(event)} value={snumero} placeholder="Segundo número" class="form-control"/>
                    <input type="text" onChange={(event) => Set3(event)} value={tnumero} placeholder="Tercer número" class="form-control" />
                    <p></p>
                    <button onClick={() => numerosIguales()} class="btn btn-primary btn-sm">Hey! Click me</button>
                    <p>{sal}</p>
                    <p></p>
                    <p>{categories}</p>
                </div>
                
                <Componentlistanumeros lista={categories} onComponentlistanumeros={onComponentlistanumeros} />
            </div>
        </>

    )

}
