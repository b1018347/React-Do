import React, { Component } from "react";
import { connect } from 'react-redux';
import "../../App.css";
import Header from '../UI/Header';
import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";
import {addTodo, deleteTodo, completeTodo, undoTodo} from '../../store/actions/actions';

class Layout extends Component {
  render() {
    const todos = this.props.todos.map((todo) => {
      
        return !todo.completed ? (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
            buttonText="Complete"
            canRemove
            mainClick={() => this.props.onCompleteTodo(todo.id)}
            deleteClick={() => this.props.onDeleteTodo(todo.id)}
            className="list-group-item"
          />
        ) : null;
    });
    
    const completedTodos =  this.props.todos.map((todo) => {
        return todo.completed ? (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
            buttonText="Not done"
            mainClick={() => this.props.onUndoTodo(todo.id)}
            className="list-group-item list-group-item-success"
          />
        ) : null;
    }); 

    return (
      <div>
        <Header/>
        <div className="container">
            <div className="row">
              <div className="col-md-12">
                <AddTodo click={ this.props.onAddTodo } />
              </div>
            </div>
            <div className="row Todos">
              <div className="col-md-12">
                <div className="list-group">
                  {todos}
                  {completedTodos}
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      todos: state.todos
    };
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onAddTodo: (todo) => dispatch(addTodo(todo)),
      onDeleteTodo: (id) => dispatch(deleteTodo(id)),
      onCompleteTodo: (id) => dispatch(completeTodo(id)),
      onUndoTodo: (id) => dispatch(undoTodo(id))
    }
  }

  
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
