import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  const newStyle={
    marginBottom: "100px",
    minHeight: "21vh"
  };
  return (
    <div className="container" style={newStyle}>
      <h3 className="text-center my-3">Todos List</h3>
      <div class="list-group">
        {props.todos.length === 0
          ? <h6 className="text-center">No Todos to Display</h6>
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
    </div>
  );
};

Todos.propTypes = {};

export default Todos;
