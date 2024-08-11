import "./Todo.css";
import PropTypes from "prop-types";

const Todo = ({ todos_completed, total_todos }) => {
  return (
    <section className="todo_section">
      <div className="todo_content">
        <div className="todo_text">
          <p className="todo_main_text">DO IT REACT!!!</p>
          <p className="todo_sub_text">Add Your Tasks Here!</p>
        </div>
        <div className="todo_progress">
          <p className="todo_progress_text">
            {todos_completed}/{total_todos}
          </p>
        </div>
      </div>
    </section>
  );
};

Todo.propTypes = {
  completed_tasks: PropTypes.number.isRequired,
  total_tasks: PropTypes.number.isRequired,
};

export default Todo;
