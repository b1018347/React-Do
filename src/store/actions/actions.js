export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UNDO_TODO = 'UNDO_TODO';


export const addTodo = todo => {
    todo.id = Date.now();
    return {
        type: ADD_TODO,
        payload: todo
    };
}

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: {id: id}
    };
}

export const completeTodo = id => {
    return {
        type: COMPLETE_TODO,
        payload: {id: id}
    };
}

export const undoTodo = id => {
    return {
        type: UNDO_TODO,
        payload: {id: id}
    };
}
