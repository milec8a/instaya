import React, {useState} from 'react';

export default function Counting(props) {
    const [Count, setCount] = useState(0)
    const add = ()=>setCount(
        Count+1
    )
    const sub = ()=>setCount(
        Count-1
    )

    return (
    <>
    <h2>Counting</h2>
    <div>
        <button onClick ={add}>+</button>
        <button onClick ={sub}>-</button>

    </div>
    <h3>{Count}</h3>
    <p>Contador de : {props.titulo}</p>
    </>
    
  )
}

Counting.defaultProps = {titulo: "Clicks"}