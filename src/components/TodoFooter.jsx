import "../assets/styles/TodoFooter.css";
export default function TodoFooter({ activeCount, setFilter, clearCompleted }) {
    return (
      <div className="TodoFooter">
        <span>{activeCount} items left</span>
        <div className="TodoFooter-buttons">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("active")}>Active</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
        </div>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    );
  }