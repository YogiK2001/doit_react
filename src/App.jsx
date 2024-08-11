import Header from "./components/Header/Header.jsx";
import Todo from "./components/Todo/Todo.jsx";
import Form from "./components/Form/Form.jsx";
import List from "./components/List/List.jsx";
import "./App.css";

import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;
  const total_todos = todos.length;

  return (
    <div className="wrapper">
      <Header></Header>
      <Todo todos_completed={todos_completed} total_todos={total_todos}></Todo>
      <Form setTodos={setTodos}></Form>
      <List todos={todos} setTodos={setTodos}></List>
    </div>
  );
}

export default App;
