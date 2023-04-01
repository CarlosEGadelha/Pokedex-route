function Desc(props){
    return(
        <>
        <h1>{props.nome}</h1>
        <h2>Tipo: {props.tipo}</h2>
        <h2>Habilidades: {props.habilidades}</h2>
        <h2>Ataques:</h2>
        <div class = "row justify-content-around">
            <h3>{props.ataques}</h3>
            <h3>{props.ataques_2}</h3>
        </div>
        </>);
        }

export default Desc; 