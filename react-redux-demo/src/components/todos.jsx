import React, { Component } from "react";
import { addTodo } from "../store/todos/todoActions";
import { connect } from "react-redux";

class Todos extends Component {
  state = {};

  handleAddTodo = () => {
    let newId = this.autoIncrement();
    this.props.addTodo(newId, `Todo Task ${newId}`);
  };

  autoIncrement() {
    let newId = 1;
    this.props.todos.map((todo) => {
      if (todo.id >= newId) {
        newId++;
      }
      return todo;
    });
    return newId;
  }

  render() {
    const { todos } = this.props;

    return (
      <React.Fragment>
        <p>
          <button type="button" onClick={this.handleAddTodo}>
            + Add todo
          </button>
        </p>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (id, title) => dispatch(addTodo(id, title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
