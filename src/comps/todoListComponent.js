import React from "react";

function TodoComponent(props) {
  const todo = props.todo;

  return (
    <div className={` ` + (todo.done && "line-through")}>
      <span
        onClick={(e) => {
          props.onTodoClick(todo);
        }}
        className={`` + (todo.done ? "line-through" : "")}
      >
        {todo.val} (Date Added: {todo.date.toLocaleTimeString()})
      </span>

      <button
        onClick={(e) => {
          props.deleteTodo(todo);
        }}
        className="alignRight"
      >
        ❌
      </button>
      {!todo.done && todo.clicked && (
        <>
          <br />
          <div onClick={() => props.markDone(todo)}>✂ Cross out </div>
        </>
      )}
    </div>
  );
}

function TodoListComponent(props) {
  return (
    <>
      {props.todos.map((todo) => {
        return (
          <TodoComponent
            key={`${todo.id}-${todo.clicked}`}
            todo={todo}
            markDone={props.markDone}
            onTodoClick={props.onTodoClick}
            deleteTodo={props.deleteTodo}
          />
        );
      })}
    </>
  );
}

export default TodoListComponent;
