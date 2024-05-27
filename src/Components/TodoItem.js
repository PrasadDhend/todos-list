import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
      <a
        href="#"
        class="list-group-item list-group-item-action"
        aria-current="true"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{todo.title}</h5>
          <small>3 days ago</small>
        </div>
        <p class="mb-1">{todo.describe}</p>
        <button type="submit" onClick={()=>{onDelete(todo)}} className="btn my-3 btn-danger">Delete</button>
      </a>
  );
};

export default TodoItem;
