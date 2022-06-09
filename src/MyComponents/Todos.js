import React from "react";
import "../MyComponents/background.css";
import { TodoItem } from "../MyComponents/TodoItem";
export const Todos = (props) => {
  const myStyle = {
    // minHeight: "70vh",
    // margin: "40px",
  };

  return (
    <>
      <div className="containerTodos" style={myStyle}>
        <div className="Todolist">
          <h3>To do list</h3>
        </div>
        {props.todos.length === 0
          ? "The list is empty"
          : props.todos.map((todo) => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
              );
            })}
      </div>
    </>
  );
};
