import React from "react";
import styles from "../css/Todo.module.css";

function Todo({ id, title, completed, deleteTask, upadateStatus }) {
  const text = {
    textDecoration: completed ? "line-through" : "",
  };
  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          upadateStatus(id);
        }}
      />
      <p style={text}>{title}</p>
      <button
        onClick={() => {
          deleteTask(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
