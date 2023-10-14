import React from "react";
import Todo from "./Todo";

function Todos({ tasks, toggleComplete, deleteTask }) {
  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map((task) => (
        <Todo
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default Todos;
