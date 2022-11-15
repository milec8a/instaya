import{TodoItem} from "./TodoItem"

export function TodoList() { 

    return(
        <>
            <span>Pendienntes:03</span>
            <ul className= "card">
                <TodoItem description= "Ver la sesion 6"/>
                <TodoItem description= "Hacer el compronente practico"/>
                <TodoItem description= "Guardar cambios"/>

            </ul>
        </>
    );

} 

