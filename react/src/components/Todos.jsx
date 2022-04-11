const Todos = ({ todos, deleteTodoHandler, toggleCompleteHandler }) => {
  return (
    <>
      {todos.length ? (
        <ul>
          {todos.map((todo, i) => (
            <li style={{ cursor: "pointer" }} key={i}>
              <span
                onClick={() => toggleCompleteHandler(i)}
                style={{
                  textDecoration: todo.complete && "line-through",
                }}
              >
                {todo.task}
              </span>
              <button
                onClick={() => deleteTodoHandler(i)}
                style={{
                  margin: "auto auto auto 2rem",
                  borderRadius: "0.5rem",
                }}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h4>Please add a task</h4>
      )}
    </>
  );
};

export default Todos;
