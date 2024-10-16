import { useState } from "react"
import './entity.css'
export default function Count(){
    const [count,setCount]=useState(0);


    const Plus =()=>{
        const newCount = count +1;
        setCount(newCount);
    }
    const reduceCount=()=>{
        const newCount = count-1;
        setCount(newCount);
    }
    return (
        <div className="entity">
            <h2>COUNT : {count}</h2>
            <button onClick={Plus}>count++</button>
            <button onClick={reduceCount}>Count--</button>
        </div>
    )
}