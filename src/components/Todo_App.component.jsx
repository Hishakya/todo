import React from "react";
import TodoItem from "./Todo_Item.component";

class TodoApp1 extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      input: "",
    };
  }
  inputHandler = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  addTodo = () => {
    this.setState((state) => {
      return {
        ...state,
        todos: [...state.todos, this.state.input],
      };
    });
    this.setState({
      input: "",
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="add-todo">
          <input
            type="text"
            placeholder="Add "
            onChange={this.inputHandler}
            value={this.state.input}
          />
          <button onClick={this.addTodo}>Add Items</button>
        </div>
        <div className="todos">
          {this.state.todos.map((todo, index) => {
            return <TodoItem key={index} todo={todo} />;
          })}
         
        </div>
      </React.Fragment>
    );
  }
}

export default TodoApp1;
