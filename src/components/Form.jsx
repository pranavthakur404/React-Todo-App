import React from "react";
import styles from "../css/Form.module.css";
import { useState } from "react";
function Form({ addTask }) {
  const [task, setTask] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (task.length > 0) {
      const obj = {
        id: crypto.randomUUID(),
        title: task,
        completed: false,
      };
      setTask("");
      addTask(obj);
    }
  }
  return (
    <div className={styles.formContainer}>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task.."
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Form;
