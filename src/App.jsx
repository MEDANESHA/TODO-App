import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import "./App.css";
import React, { useState, useEffect } from "react";
import moonIcon from "./assets/images/icon-moon.svg";
import sunIcon from "./assets/images/icon-sun.svg";

const initialTodos = [
  { id: 1, text: "Complete online JavaScript course", completed: true },
  { id: 2, text: "Jog around the park 3x", completed: false },
  { id: 3, text: "10 minutes meditation", completed: false },
  { id: 4, text: "Read for 1 hour", completed: false },
  { id: 5, text: "Pick up groceries", completed: false },
  { id: 6, text: "Complete Todo App on Frontend Mentor", completed: false },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState("all");
  const [newTodo, setNewTodo] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) =>
    filter === "all"
      ? true
      : filter === "active"
      ? !todo.completed
      : todo.completed
  );

  return (
    <div className="Body">
      <Header />
      <div className="MainCont">
      <div className="Header-container">
      <h1 className="HeaderTitle">TODO</h1>
      <button className="ThemeToggle" onClick={toggleTheme} aria-label="Toggle theme">
        <img src={isDarkMode ? sunIcon : moonIcon} alt="Toggle theme icon" className="ThemeIcon" />
      </button>

      </div>
        <div className="inputCont">

        <TodoInput
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          addTodo={addTodo}
        />
        </div>
        <div className="listCont">

        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          setTodos={setTodos}
        />
        <TodoFooter
          activeCount={todos.filter((t) => !t.completed).length}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />
        </div>
        <div className="filterButtonsMobile">
  <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>All</button>
  <button onClick={() => setFilter("active")} className={filter === "active" ? "active" : ""}>Active</button>
  <button onClick={() => setFilter("completed")} className={filter === "completed" ? "active" : ""}>Completed</button>
</div>
        <p className="infoText" >Drag and drop to reorder list</p>
      </div>
    </div>
  );
}
