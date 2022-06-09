import React from "react";
import "../MyComponents/background.css";
export const TodoItem = ({ todo, onDelete }) => {
  const myStyle = {};
  return (
    <div className="containerTodoItem">
      <div>
        <h3>TodoItem</h3>
      </div>
      <h4>{todo.title}</h4>
      <h4>{todo.desc}</h4>
      <button
        className="btn btn-danger"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};
