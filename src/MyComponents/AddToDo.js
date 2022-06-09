import React, { useState } from "react";
import "../MyComponents/background.css";
export default function AddToDo({ addTodo }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Please fill the Title and description");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="containerAddToDo">
      <h3>ADD todo</h3>
      <form className="row g-3" onSubmit={submit}>
        <ul>
          <li>
            {" "}
            <div className="col-md-6">
              <label htmlFor="title" className="form-label">
                To do title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="form-control"
                id="title"
              />
            </div>
          </li>
          <br></br>
          <li>
            <div className="col-md-6">
              <label htmlFor="desc" className="form-label">
                Add Description
              </label>
              s
              <input
                type="text"
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                className="form-control"
                id="desc"
              />
            </div>
          </li>
        </ul>

        <div className="col-12">
          <button type="submit" className="btn btn-success">
            Add to
          </button>
        </div>
      </form>
    </div>
  );
}
