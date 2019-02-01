import * as actionTypes from './actions/actions';

const reducer = (state, action) => {
  switch(action.type) {
      case actionTypes.ADD_TODO: 
        return {
            todos: [{...action.payload, completed: false}, ...state.todos]
        };
      case actionTypes.DELETE_TODO:
        return {
            todos: state.todos.filter(x => x.id !== action.payload.id)
        };  
      case actionTypes.COMPLETE_TODO:
        const completedTodo = {...state.todos.find(x => x.id === action.payload.id)};
        completedTodo.completed = true;
        return {
          todos: [...state.todos.filter(x => x.id !== action.payload.id), completedTodo],
        };  
      case actionTypes.UNDO_TODO:
        const todo = {...state.todos.find(x => x.id === action.payload.id)};
        todo.completed = false;
        return {
          todos: [...state.todos.filter(x => x.id !== action.payload.id), todo],
        };
      default:
        return state;  
  }  
};

export default reducer;
