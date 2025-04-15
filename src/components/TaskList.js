import React from "react";

function TaskList({ tasks, onTaskDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <div key={index} className="task">
          <div className="label">{task.category}</div>
          <div className="text">{task.text}</div>
          <button onClick={() => onTaskDelete(task.text)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
