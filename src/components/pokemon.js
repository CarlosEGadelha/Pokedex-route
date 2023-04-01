import Imagem from "./imagem";
import Desc from "./descricao";

function Pokemon(props){
    return(
        <div className="row">
            <div className="col-4" class="text-center">
                <Imagem imagem={props.imagem}/>
            </div>
            <div className="col-8" class="text-center">
                <Desc nome={props.nome} tipo={props.tipo} habilidades={props.habilidades} ataques = {props.ataques} ataques_2 = {props.ataques_2}/>
            </div>
        </div>
      
    );

}



export default Pokemon;