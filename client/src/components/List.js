import React, { useState } from 'react'
import axios from 'axios';

const List = () => {
    const [calculations, setCalculations] = useState("");

    //useEffect(() => {
    axios.get('/api')
        .then(response => {
                setCalculations(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    const y=calculations.length/2
    const z=Math.round(y)
    return (
        <div className="flex-fill">
        
        <h4 style={{justifyContent:"center",color:"red"}}>We have Processed {z} requests so far</h4>
    </div>
    )
}

export default List
