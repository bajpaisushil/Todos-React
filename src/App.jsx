import { useReducer, useState } from 'react';
import './App.css';
import AddTodo from './components/addTodo/addTodo';
import TodoList from './components/todoList/todoList';
import todoContext from './context/todoContext';
import todoReducer from './reducers/todoReducer';


function App() {
  const [todos, dispatch]=useReducer(todoReducer, []);

  return (
    <div>
      <todoContext.Provider value={{todos, dispatch}}>
      <AddTodo />
      <TodoList />
      </todoContext.Provider>
    </div>
  )
}

export default App
