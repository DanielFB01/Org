import "./formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";
import { useState } from "react";

const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarfoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (event) => {
        event.preventDefault()
        let datosAEnviar= {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEnvio = (event) => {
        event.preventDefault();
        crearEquipo({titulo, colorPrimario:color});
    }

    

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar Nombre" 
                required={true} 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <Campo
                titulo="Puesto" 
                placeholder="Ingresar Puesto" 
                required={true}
                valor={puesto} 
                actualizarValor={actualizarPuesto}
                />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de Foto" 
                required={true}
                valor={foto} 
                actualizarValor={actualizarfoto}
                />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo = {actualizarEquipo}
                equipos= {props.equipos}
            />
            <Boton texto= "Crear colaborador"/>
        </form>
        <form onSubmit={manejarNuevoEnvio}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar Titulo" 
                required={true} 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en hexadecimal"  
                required={true}
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
                />
            <Boton texto= "Registrar equipo"/>
        </form>
    </section>
}

export default Formulario;