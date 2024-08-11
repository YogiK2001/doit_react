import "./From.css";
const Form = ({ setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.todo.value;
    setTodos((prevTodos) => [
      ...prevTodos,
      { title: value, id: self.crypto.randomUUID(), is_completed: false },
    ]);
    e.target.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo" className="sr-only">
        {" "}
        {/* Adding sr-only for accessibility */}
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Write your next task"
          className="input-field"
        />
      </label>
      <button className="submit-button">
        <span className="visually-hidden">Submit</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      </button>
    </form>
  );
};

export default Form;
