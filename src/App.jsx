import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((result) => result.json())
      .then((data) => setTodos(data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setTimeout(() => {getData()}, 5000);
  }, []);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return (
    <div onClick={getData}>
      Hola mundo
      <div className="todos_list">
        {!loading &&
          todos.map((todo) => {
            return (
              <div
                key={todo.id}
                style={{
                  backgroundColor: `${todo.completed ? "red" : ""}`,
                }}
              >
                <span>{todo.id}</span>
                <h2>{todo.title}</h2>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
