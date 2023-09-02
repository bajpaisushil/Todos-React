
function todoReducer(state, action){
    switch(action.type){
        case 'add_todo':
            let nextId=state.length+1;
            return  [...state, {id: nextId, text: action.payload.todoText, isFinished: false}];
        case 'edit_todo':
            const newTodoList=state.map(todo=>{
                if(todo.id==action.payload.id){
                    todo.text=action.payload.newTodo;
                }
                return todo;
            })
            return newTodoList;
        case 'finish_todo':
            const newTodoLis=state.map(todo=>{
                if(todo.id==action.payload.id){
                    todo.isFinished=action.payload.state;
                }
                return todo;
            })
            return newTodoLis;
        case 'delete_todo':
            const newTodoLi=state.filter(todo=> todo.id!==action.payload.id);
            return newTodoLi;
        default:
            return state;
    }
}

export default todoReducer;
