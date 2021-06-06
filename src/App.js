//import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";
import Todo from "./components/ToDo";
import TodoForm from "./components/TodoForm";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, title: "Excercising", complete: false },
        { id: 2, title: "Reading", complete: false },
        { id: 3, title: "coding", complete: false },
      ],
    };
  }

  addTodo = (title) => {
    let todos = [...this.state.todos];
    let id = todos[todos.length - 1] ? todos[todos.length - 1]["id"] + 1 : 0;
    let newTodo = {
      id,
      title,
      complete: false,
    };
    todos.push(newTodo);
    this.setState({ todos });
  };

  completeTodo = (id) => {
    let todos = [...this.state.todos];
    todos.filter((todo) => {
      if (todo.id === id) {
        todo.complete = true;
      }
    });
    this.setState({ todos });
  };
  deleteTodo = (id) => {
    let todos = [...this.state.todos];
    todos.filter((todo, index) => {
      if (todo.id === id) {
        todos.splice(index, 1);
      }
    });
    this.setState({ todos });
  };
  render() {
    return (
      <div>
        <h1 className="heading">ToDo Management Application</h1>
        <div className="todos">
          {this.state.todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              completeTodo={(id) => this.completeTodo(id)}
              deleteTodo={(id) => this.deleteTodo(id)}
            />
          ))}
        </div>
        <TodoForm addTodo={(todo) => this.addTodo(todo)} />
      </div>
    );
  }
}
