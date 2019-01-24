import React, { Component } from "react";
import { connect } from 'react-redux';
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo/Todo";
import AddTodo from "./AddTodo/AddTodo";
import {addTodo, deleteTodo, completeTodo, undoTodo} from './store/actions/actions';

class App extends Component {
  state = {
    title: 'test',
    description: 'desc'
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React-Do</h1>
        </header>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <AddTodo click={ this.props.onAddTodo } />
              </div>
            </div>
            <div className="row Todos">
              <div className="col-md-12">
                <div className="list-group">
                  {this.props.todos.map((todo) => {
                    return (
                      <Todo
                        className="list-group-item"
                        key={todo.id}
                        title={todo.title}
                        description={todo.description}
                        buttonText="Complete"
                        canRemove={true}
                        mainClick={() => this.props.onCompleteTodo(todo.id)}
                        deleteClick={() => this.props.onDeleteTodo(todo.id)}
                      />
                    );
                  })}

                  {this.props.completedTodos.map((todo) => {
                    return (
                      <Todo
                        className="list-group-item list-group-item-success"
                        key={todo.id}
                        title={todo.title}
                        description={todo.description}
                        buttonText="Not done"
                        mainClick={() => this.props.onUndoTodo(todo.id)}
                      />
                    );
                  })}
                </div>
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
    todos: state.todos,
    completedTodos: state.completedTodos
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
