import "../assets/styles/TodoInput.css";
export default function TodoInput({ newTodo, setNewTodo, addTodo }) {
    return (
    <label className="InputCheckbox">
      <input
        type="text"
        placeholder="Create New Todo.."
        className="TodoInput"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTodo()}
      />
      <span className="Checkmark">
      <span className="CheckmarkInner"></span>
      </span>
    </label>
    );
  }