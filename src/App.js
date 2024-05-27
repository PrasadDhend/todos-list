// import logo from './logo.svg';
import "./App.css";
import { Footer } from "./Components/Footer";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import About from "./Components/About";
import Header from "./Components/Header";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Services from "./Components/Services";

function App() {
  let initTodos = [];
  if (!localStorage.getItem("todos")) {
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    alert(todo.sno + ": " + todo.title + ". I am deleted. Bye Bye...!");
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (t, d) => {
    let newsno;
    if (todos.length == 0) {
      newsno = 0;
    } else {
      newsno = todos[todos.length - 1].sno + 1;
    }
    const newTodo = {
      sno: newsno,
      title: t,
      describe: d,
    };
    setTodos([...todos, newTodo]);
  };

  let [todos, setTodos] = useState(initTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <BrowserRouter>
      <div>
        <Header title="Todos List" searchBar={true} />
        <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route path="/" element={<Home addTodo={addTodo} todos={todos} onDelete={onDelete} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function Home({ addTodo, todos, onDelete }) {
  return (
    <>
      <AddTodo addTodo={addTodo}></AddTodo>
      <Todos todos={todos} onDelete={onDelete}></Todos>
    </>
  );
}

export default App;
