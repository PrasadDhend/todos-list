import PropTypes from "prop-types";
import React, { useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [describe, setDescribe] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !describe) {
        return alert("Title or Description not added..!");
        
    }
    props.addTodo(title, describe);
    setTitle("");
    setDescribe("");
  };
  return (
    <form
      className="container border border-primary rounded my-3 py-3"
    >
      <h3 className="text-center">Add Todo</h3>
      <div class="mb-3">
        <label for="title" class="form-label">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
          class="form-control"
          id="exampleInputTitle"
          aria-describedby="titleHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputDescription" class="form-label">
          Description
        </label>
        <input
          type="text"
          value={describe}
          onChange={(e)=>{setDescribe(e.target.value)}}
          class="form-control"
          id="exampleInputDescription"
        />
      </div>
      <button onClick={submit} type="submit" class="btn btn-primary">
        Add Todo
      </button>
    </form>
  );
};

AddTodo.propTypes = {};

export default AddTodo;
