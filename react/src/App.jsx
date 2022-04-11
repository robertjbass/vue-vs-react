import React, { useState } from "react";
import Todos from "./components/Todos";

// const dummyTodos = [
//   { id: 1, task: "Do Laundry", complete: false },
//   { id: 2, task: "Make Dinner", complete: true },
// ];

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  const deleteTodoHandler = (i) => {
    const t = [...todos];
    t.splice(i, 1);
    setTodos(t);
  };

  const toggleCompleteHandler = (i) => {
    const t = [...todos];
    t[i].complete = !t[i].complete;
    setTodos(t);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask) return;

    const n = {
      id: todos.length + 1,
      task: newTask,
      complete: false,
    };

    setTodos([...todos, n]);
    setNewTask("");
  };

  const inputHandler = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <>
      <h1>Todos</h1>

      <form id="actions" onSubmit={addTask}>
        <input
          onChange={inputHandler}
          style={{ width: "100%" }}
          type="text"
          value={newTask}
        />
        <button style={{ display: "none" }} onClick={addTask}>
          Add Task
        </button>
      </form>
      <Todos
        todos={todos}
        deleteTodoHandler={deleteTodoHandler}
        toggleCompleteHandler={toggleCompleteHandler}
      />
    </>
  );
}

export default App;
