import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
