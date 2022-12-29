export function States(props){
    let cases = props.state.cases;
    let deaths = props.state.deaths;
    let suspects = props.state.suspects;
    return(
        <div className="statesInfo">
            <h2>{props.state.state}</h2>
            <ul>
                <li>Casos Confirmados: {cases}</li>
                <li>Mortes: {deaths}</li>
                <li>Suspeitos: {suspects}</li>
            </ul>
        </div>
    )
}