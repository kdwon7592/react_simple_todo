import './App.css';
import React, { Component } from 'react';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        // {
        //   title: 'Todo Default',
        //   id: 0
        // },
      ],
      uniqueId: 1,
    }
  }

  addTodo(title) {
    const {
      tasks,
      uniqueId,
    } = this.state;

    tasks.push({
      title,
      id: uniqueId,
    })
    // const newTasks = [...tasks, uniqueId];

    this.setState({
      tasks,
      uniqueId: uniqueId + 1,
    })
  }

  resetTodo() {
    this.setState({
      tasks: [],
      uniqueId: 0,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <button onClick={() => this.resetTodo()}>reset</button>
        <TodoInput addTodo={(title) => { this.addTodo(title) }} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
