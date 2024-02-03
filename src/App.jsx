import React, { useState } from "react";
import Heading from "./components/Heading";
import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";
import Todos from "./components/Todos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todo, setTodo] = useState([
    { id: 1, title: "Dummy Task", completed: false },
  ]);

  function addTask(obj) {
    setTodo((prevData) => {
      return [...prevData, obj];
    });
  }

  function deleteTask(id) {
    setTodo((prevData) => {
      return prevData.filter((data) => {
        return data.id !== id;
      });
    });
  }

  function upadateStatus(id) {
    setTodo((prevData) => {
      return prevData.map((data) => {
        if (data.id == id) {
          return { ...data, completed: !data.completed };
        } else {
          return { ...data };
        }
      });
    });
  }

  return (
    <main>
      <Heading />
      <Form addTask={addTask} />
      <Todos
        todo={todo}
        deleteTask={deleteTask}
        upadateStatus={upadateStatus}
      />
      <ToastContainer />
    </main>
  );
}

export default App;
