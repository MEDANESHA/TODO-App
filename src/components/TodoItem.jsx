import "../assets/styles/TodoItem.css";
import closeIcon from "../assets/images/icon-cross.svg"; 

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="TodoItem">
      <div className="TodoItemContent">
        {/* Custom Checkbox */}
        <label className="CustomCheckbox">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className="Checkmark"></span>
        </label>

        <span className={`TodoText ${todo.completed ? "Completed" : ""}`}>
          {todo.text}
        </span>
      </div>

      <button onClick={() => deleteTodo(todo.id)} className="DeleteButton">
        <img src={closeIcon} alt="Delete" className="DeleteIcon" />
      </button>
    </div>
  );
}

