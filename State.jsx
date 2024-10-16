import { useState } from "react"
import './entity.css'
export default function Team (){
    const [team , setTeam] = useState(11);
    const adding =()=>{
        const newTeam = team+1;
        setTeam(newTeam);
    }
    const removing =()=>{
        setTeam(team-1)
    }
    return (
        <div className="entity">
            <h3>Team Member :: {team} </h3>
            <button onClick={adding}>adding</button>
            <button onClick={removing}>Removing</button>
        </div>
    )

}