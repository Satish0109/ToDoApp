import React, { Component } from "react";

class ToDo extends Component {
  render() {
    return (
      <div>
        <div className="todo">
          <p
            style={{
              textDecoration: this.props.todo.complete ? "line-through" : "",
            }}
          >
            {this.props.todo.title}
          </p>
          <div className="status">
            <button
              className="complete"
              onClick={() => this.props.completeTodo(this.props.todo.id)}
            >
              complete
            </button>
            <button
              className="delete"
              onClick={() => this.props.deleteTodo(this.props.todo.id)}
            >
              x
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDo;
