import React, { useContext, useState } from 'react'
import todoContext from '../../context/todoContext';

const AddTodo = () => {
    const {todos, dispatch}=useContext(todoContext);
    const [todoText, setTodoText]=useState('');
    function addTodo(todoText){
        let nextId=todos.length+1;
            dispatch({type: 'add_todo', payload: {todoText}});
    }

  return (
    <div>
        <input placeholder='Add your next todo...' onChange={(e)=> setTodoText(e.target.value)} value={todoText} />
        <button onClick={()=> {
            addTodo(todoText);
            setTodoText('');
            }}>Submit</button>
    </div>
  )
}

export default AddTodo;

