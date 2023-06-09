import "./CampoTexto.css"

const Campo = (props)=>{
    const placeholderModificador= `${props.placeholder}...`
    const manejarCambio = (event) =>{
        props.actualizarValor(event.target.value)
    }
    const {type = "text"} = props
    return  <div className= {`campo campo-${type}` }>
                <label>{props.titulo}</label>
                <input 
                placeholder= {placeholderModificador} 
                required={props.required} 
                value={props.valor}
                onChange={manejarCambio}
                type={type}
                />
            </div>           
}

export default Campo;