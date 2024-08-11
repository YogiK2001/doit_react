import "./List.css";
import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";

const Item = ({ item, setTodos }) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const completeTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id
          ? { ...todo, is_completed: !todo.is_completed }
          : todo
      )
    );
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleInpuSubmit = (event) => {
    event.preventDefault();
    setEditing(false);
  };
  const handleInputBlur = () => {
    setEditing(false);
  };

  const handleInputChange = (e) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, title: e.target.value } : todo
      )
    );
  };

  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
  };

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);

  return (
    <li id={item?.id} className="todo_item">
      {editing ? (
        <form className="edit-form" onSubmit={handleInpuSubmit}>
          <label htmlFor="edit-todo">
            <input
              ref={inputRef}
              type="text"
              name="edit-todo"
              id="edit-todo"
              defaultValue={item?.title}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
            />
          </label>
        </form>
      ) : (
        <>
          <button className="todo_items_left" onClick={completeTodo}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="12"
                cy="12"
                r="10"
                className={
                  item.is_completed ? "circle_completed" : "circle_pending"
                }
              />
            </svg>
            <p className={item.is_completed ? "completed" : ""}>
              {item?.title}
            </p>
          </button>
          <div className="todo_items_right">
            <button className="edit_button" onClick={handleEdit}>
              <span className="visually-hidden">Edit</span>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l7 7-9 9h-7v-7l9-9zm7-2l3 3-7 7-3-3 7-7zm-1 4l-7-7-11 11v7h7l11-11z" />
              </svg>
            </button>
            <button className="delete_button" onClick={handleDelete}>
              <span className="visually-hidden">Delete</span>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6v-2h4l1-1h8l1 1h4v2h-18zm2 0h12v14h-12v-14zm3 2v10h-2v-10h2zm6 0v10h-2v-10h2zm-3 0v10h-2v-10h2z" />
              </svg>
            </button>
          </div>
        </>
      )}
    </li>
  );
};
Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    is_completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Item;
