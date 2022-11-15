import React from 'react';

function Login (){
    return(
        <div>
            <h3>Iniciaste sesion</h3>
        </div>
    )

}

function Logout(){
    return(
        <div>
            <h3>Cerraste sesion</h3>
        </div>
    )
}

export default function Condicional (props){
    const logueado = props.logueado

    return(
            logueado ? <Login/> : <Logout/>
    )
}