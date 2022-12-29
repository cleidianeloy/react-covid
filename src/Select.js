
import { useState, useEffect } from 'react';
export function Select(props){
        const [error, setError] = useState(null);
        const [states, setStates] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const onChange =  (e) => {
            let stateSelected = states.find((element, index) => {
                    return element.uf === e.target.value;
            })
            props.onChange(stateSelected);
        }
        useEffect(()=>{
            fetch('https://covid19-brazil-api.vercel.app/api/report/v1/')
            .then(res => res.json())
            .then((result) => {
                setIsLoading(false);
                setStates(result.data);
                props.onChange(result.data[0]);
            },
            (error) =>{
                setIsLoading(false);
                setError(error);
            })
        },[])


        if(error) {
           return <div>Error: {error.message}</div>
        }else if(isLoading){
            return <div>Loading...</div>
        }else{
            return(
            <select onChange={onChange}>
                {
                   states.map((state, index) => {
                        return (
                            <option value={state.uf} key={index}>
                            {state.state}
                           </option>
                        )

                    })
                    
                }
            </select>   
        )    
    }
}
        