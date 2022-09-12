import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {Hora}  from './components/Punto1Hora';
import { Componentllamada } from './components/Punto2ComponentLlamada';
import { Nombrehora } from './components/Punto3NombreHora';
import { Componentnumeros } from './components/Punto4Componentnumeros';
import { Componentlistanumeros } from './components/Punto5ComponentLista';
import { Componentimpares } from './components/Punto6ComponentImpares';
import { ComponentAlumno } from './components/Punto11ComponentAlumno';
import { ComponentSalario } from './components/Punto7ComponentSalario';
import { ComponentNumeroAleatorio } from './components/Punto8ComponentNumeroAleatorio';
import { ComponentTabla } from './components/Punto9ComponentTabla';
import { ComponentAlumnos } from './components/Punto12ComponentAlumnos';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
      <Hora/>
      <Componentllamada/>
      <Nombrehora/>
      <Componentnumeros/>
      <Componentimpares/>
      <ComponentSalario/>
      <ComponentNumeroAleatorio/>
      <ComponentTabla/>
      <ComponentAlumno/>
      <ComponentAlumnos/> 
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
