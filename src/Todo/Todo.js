import React from "react";
import './Todo.css';

const todo = props => {
  let canRemove = null;
  if (props.canRemove) {
    canRemove = (
      <button onClick={props.deleteClick} className="btn btn-danger">
        Delete
      </button>
    );
  }
  
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <button className="btn btn-primary right-buffer" onClick={props.mainClick}>
        {props.buttonText}
      </button>
      {canRemove}
    </div>
  );
};

export default todo;
