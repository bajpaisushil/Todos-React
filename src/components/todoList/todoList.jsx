import React, { useContext } from "react";
import Todo from "../todo/todo";
import todoContext from "../../context/todoContext";

const TodoList = () => {
    const {todos, dispatch}=useContext(todoContext);
  function onDeleteTodos(id) {
    dispatch({type: 'delete_todo', payload: {id}})
  }
  function onEditTodos(id, newTodo) {
    dispatch({type: 'edit_todo', payload: {id, newTodo}})
  }

  function onFinishTodos(id, state) {
    dispatch({type: 'finish_todo', payload: {id, state}})
  }

  return (
    <div>
      {todos &&
        todos?.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            isFinished={todo.isFinished}
            finishTodo={(state)=> onFinishTodos(todo.id, state)}
            deleteTodo={() => onDeleteTodos(todo.id)}
            editTodo={(newTodo)=> onEditTodos(todo.id, newTodo)}
          />
        ))}
    </div>
  );
};

export default TodoList;
