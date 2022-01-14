import React, { useState } from "react";
import "./App.css";
import InputComponent from "./comps/inputComponent.js";
import TodoListComponent from "./comps/todoListComponent.js";
import "rsuite/dist/rsuite.min.css";

let id = 1;

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    if (inputValue === "") {
      alert("Please input a value.");
      return;
    }
    setTodos([
      ...todos,
      {
        id: id++,
        date: new Date(),
        val: inputValue,
        done: false,
        clicked: false,
      },
    ]);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const onTodoClick = (todo) => {
    const index = todos.findIndex((t) => t.id === todo.id);
    todos[index].clicked = !todo.clicked;

    setTodos([...todos]);
  };

  const markDone = (todo) => {
    setTodos([
      ...todos.filter((t) => t.id !== todo.id),
      { ...todo, done: true, clicked: false },
    ]);
  };

  // const markDone = (todo) => {
  //   setTodos(todos.reduce((newTodos, t) => {
  //     if (todo.val === t.val) {
  //       return [...newTodos, { ...t, done: true }];
  //     }

  //     return [...newTodos, t];
  //   }, []));
  // }

  return (
    <div className="container">
      🌻
      <div className="App-header">
        <a href="/">To Do List</a>
      </div>
      <div className="App-header-small">
        Click on item to cross it out. <br />
        Click X to delete it entirely. <br />
        <br />
        Refresh to restart app.
        <br />
        (or click on "To Do List")
      </div>
      <div className="box">
        <InputComponent
          inputValue={inputValue}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        ></InputComponent>
        <TodoListComponent
          todos={todos}
          onTodoClick={onTodoClick}
          deleteTodo={deleteTodo}
          markDone={markDone}
        ></TodoListComponent>
      </div>
    </div>
  );
}

export default App;
