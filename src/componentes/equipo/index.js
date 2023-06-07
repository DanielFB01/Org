import "./equipo.css"
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";
const Equipo = (props)=>{
    //destructuracion
    const {colorPrimario, titulo,id}= props.datos;
    const estiloTitulo= {borderColor: colorPrimario};
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props;
    return <>
        { colaboradores.length > 0 &&
            <section className="equipo" style={{backgroundColor: hexToRgba(colorPrimario,0.4) }}>
                <input
                onChange={(e)=> actualizarColor(e.target.value, id)}
                type="color"
                className="input-color"
                value={hexToRgba(colorPrimario,0.4)}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                {
                    colaboradores.map( (colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                        />)
                }
                </div>
            </section>
        }
        </>
}

export default Equipo