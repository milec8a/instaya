import React from 'react';

export default function List() {
    const nombres = [{id:1, nombre:"Anna"},{id:2, nombre:"Betty"},{id:3, nombre:"Carla"},{id:4, nombre:"Daniela"},{id:5, nombre:"Erika"},{id:6, nombre:"Fernanda"}]

    return(
        <div>
        {
            nombres.map(element=> (
                <p key = {element.id}>{element.nombre}</p>
            ))
        }
        </div>
    )
}