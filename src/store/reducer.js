import * as actionTypes from './actions/actions';

const reducer = (state, action) => {
  switch(action.type) {
      case actionTypes.ADD_TODO: 
        return {
            ...state,
            todos: [{...action.payload}, ...state.todos]
        };
      case actionTypes.DELETE_TODO:
        return {
            ...state,
            todos: state.todos.filter(x => x.id !== action.payload.id)
        };  
      case actionTypes.COMPLETE_TODO:
        const completedTodo = state.todos.find(x => x.id === action.payload.id);
        return {
          ...state,
          todos: state.todos.filter(x => x.id !== action.payload.id),
          completedTodos: [completedTodo, ...state.completedTodos]
        };  
      case actionTypes.UNDO_TODO:
        const todo = state.completedTodos.find(x => x.id === action.payload.id);
        return {
          ...state,
          todos: [...state.todos, todo],
          completedTodos: state.completedTodos.filter(x => x !== todo)
        };
      default:
        break;   
  }  
  return state;
};

export default reducer;
