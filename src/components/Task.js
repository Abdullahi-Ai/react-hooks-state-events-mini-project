import React from "react";

function Task({ text, category, onDelete }) {
  return (
    <div className="task">
      <div>{text}</div>
      <div className="category">{category}</div>
      <button onClick={() => onDelete(text)}>Delete</button>
    </div>
  );
}

export default Task;
