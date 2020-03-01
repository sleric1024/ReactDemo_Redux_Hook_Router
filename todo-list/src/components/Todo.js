import React, { Component } from 'react'
import TodoList from './TodoList';
import InputBar from './InputBar';

class Todo extends Component {
  render() {
    return (
      <div>
        <h1>React To-do List with Redux</h1>
        <InputBar></InputBar>
        <TodoList></TodoList>
      </div>
    )
  }
}

export default Todo;