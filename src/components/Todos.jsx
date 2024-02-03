import React from "react";
import Todo from "./Todo";

function Todos({ todo, deleteTask, upadateStatus }) {
  return (
    <div>
      {todo.map((data) => {
        return (
          <Todo
            key={data.id}
            {...data}
            upadateStatus={upadateStatus}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
}

export default Todos;
