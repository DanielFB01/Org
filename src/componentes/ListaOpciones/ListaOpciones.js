import "./ListaOpciones.css"

const ListaOpciones = (props) =>{
    //metodo map -> arreglo.map((equipo, index o posicion) =>{
    //return <option>equipo.</option>
    //})
    
    const manejarCambio = (event) => {
        props.actualizarEquipo(event.target.value)
    }

    return  <div className="lista-opciones">
                <label>Equipos</label>
                <select value={props.valor} onChange={manejarCambio}>
                    <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                    {props.equipos.map( (equipo, index) => <option key={index} value={equipo} > {equipo} </option>)}
                </select>
            </div>
}
export default ListaOpciones;