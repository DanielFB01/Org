
import "./MiOrg.css"

const MiOrg =  (props) => {
    //Estado - hooks
    //useState()
    //const [nombreVAriable, funcionParaActualizar] = useState(Valor inicial);
    return  <section className= "OrgSection">
                <h3 className= "title">Mi Organizacion</h3>
                <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
            </section>
}

export default MiOrg;
