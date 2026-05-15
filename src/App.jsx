import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(result => result.json())
    .then(data => setTodos(data))
  };
  useEffect(() => {
    getData()
  }, [])

  return (
    <div onClick={getData}>
      Hola mundo
      <div className="todos_list">
        {
          todos.map((todo) => {
            return (
              <div key={todo.id} style={{
                backgroundColor: `${todo.completed ? 'red' : ''}`
              }}>
                <span>{todo.id}</span>
                <h2>{todo.title}</h2>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
