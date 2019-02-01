import React, { Component } from "react";

class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
 

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.click(this.state);
    this.setState({title: '', description: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="list-group-item">
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" required className="form-control" value={this.state.title} onChange={this.handleInputChange} />
          </div>
          <div className="form-group has-error">
            <label>Description</label>
            <input type="text" name="description" required className="form-control" value={this.state.description} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Add</button>
          </div>
        </div>
      </form>

    );
  }

}
export default AddTodo;
