import Item from "./Item";
import "./List.css";
import PropTypes from "prop-types";

const List = ({ todos, setTodos }) => {
  return (
    <ol className="list">
      {todos && todos.length > 0 ? (
        todos.map((item, index) => (
          <Item key={index} item={item} setTodos={setTodos} />
        ))
      ) : (
        <p>Seems Lonely Here! : What are you up to!</p>
      )}
    </ol>
  );
};

export default List;
