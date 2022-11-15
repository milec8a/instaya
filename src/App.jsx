import "./App.css";
import { TodoList } from "./components/TodoList";
import List from "./components/List";
import Condicional from "./components/Condicional";
import Counting from "./components/Counting";

export default function App() {
  return (
    <div className="App">
      <h1>Lista de Pendientes</h1>
      <TodoList/> <hr/>

      <List/><hr/>
      <Condicional logeado = {false}/><hr/>
      <Counting titulo = "articulo"/>

    </div>
  );
}
