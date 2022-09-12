import { useState } from "react"
import '../Styles/Salario.css'
export const ComponentSalario = () => {

    const [salarios, addSal] = useState([])
    const [sal, set] = useState([])
    const [newSal, setSal] = useState('')

    const onSal = (event) => {
        setSal(event.target.value)
    }

    const onAddSal = () => {
        salarios.push(newSal)
        console.log([salarios])
        console.log(salarios.length)
    }

    const agregarAumento = ([salarios]) => {

        if (salarios.length != 10) {
            const res = 'Ingresó más o menos de 10 salarios, por favor re intentar'
            set(res)
        } else {
            const newSalarios = []
            for (var i = 0; i <= salarios.length; i++) {
                var element = salarios[i]
                var list = (element + (element * 8 / 100)) / 10
                console.log(element)
                console.log(list)
                newSalarios.push(list)

            }
            const res = 'Los salarios con un 8% de aumento son' + [newSalarios]
            console.log(newSalarios)
            set(res)
        }

    }



    return (

        <>
            <div className="body7">
                <div className="titulo7">
                    <h1>7. Ingrese exactamente 10 salarios</h1>
                </div>

                <div className="input7">
                    <input type="text" onChange={(event) => onSal(event)} value={newSal} placeholder="Agregar salario" class="form-control" />
                    <button onClick={() => onAddSal(newSal)} class="btn btn-primary btn-sm">Agregar salario</button>
                    <p></p>
                    <button onClick={() => agregarAumento([salarios])} class="btn btn-primary btn-sm">Agregar aumento</button>
                    <p> {sal} </p>
                </div>

            </div>
        </>

    )

}
