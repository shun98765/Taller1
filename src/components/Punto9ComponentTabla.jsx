import { useState } from "react"
import '../Styles/Tabla.css'

export const ComponentTabla = () => {

    const [fil, fila] = useState("")
    const [col, colm] = useState("")

    const Filas = (event) => {
        fila(event.target.value)
    }

    const Columnas = (event) => {
        colm(event.target.value)
    }
    const Dibujartabla = (fil, col) => {

        // Obtener la referencia del elemento body
        var body = document.getElementsByTagName("body")[0];

        // Crea un elemento <table> y un elemento <tbody>
        var tabla = document.createElement("table");
        var tblBody = document.createElement("tbody");

        // Crea las celdas
        for (var i = 0; i < fil; i++) {
            // Crea las hileras de la tabla
            var hilera = document.createElement("tr");

            for (var j = 0; j < col; j++) {
                // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                // texto sea el contenido de <td>, ubica el elemento <td> al final
                // de la hilera de la tabla
                var celda = document.createElement("td");
                var textoCelda = document.createTextNode("celda en la hilera " + i + ", columna " + j);
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);
            }

            // agrega la hilera al final de la tabla (al final del elemento tblbody)
            tblBody.appendChild(hilera);
        }

        // posiciona el <tbody> debajo del elemento <table>
        tabla.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tabla);
        // modifica el atributo "border" de la tabla y lo fija a "2";
        tabla.setAttribute("border", "2");


    }


    return (
        <>
            <div className="body9">
                <div className="titulo9">
                    <h1 className="oscuro">9. Dibuje su Tabla</h1>
                </div>

                <div className="input9">
                    <p></p>
                    <input type="text" onChange={(event) => Filas(event)} value={fil} placeholder="Ingrese número de filas" class="form-control" />
                    <p></p>
                    <input type="text" onChange={(event) => Columnas(event)} value={col} placeholder="Ingrese número de Columnas" class="form-control" />
                    <p></p>
                    <button onClick={() => Dibujartabla(fil, col)} class="btn btn-primary btn-sm">Agregar aumento</button>
                    {/* 2 filas TR */}
                    {/* 2 columnas TD */}
                    {/* <table>
                <tr>
                    <td> 0,0 </td> 10
                    <td> 0,1 </td> 20
                </tr>
                <tr>
                    <td> 1,0 </td> 30
                    <td> 1,1 </td> 40
                </tr>
                <tr>
                    <td> 40 </td> 30
                    <td> 60 </td> 40
                </tr>
            </table> */}
                </div>

            </div>
        </>
    )

}