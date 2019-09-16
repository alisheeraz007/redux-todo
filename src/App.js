import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './all.css';
import ToDoList from './components/toDoApp'
import List from './components/List'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: null
    }
  }

  render() {
    return (
      <div>
        <Router>
          <Route
            exact path="/"
            render={() => <ToDoList
              state={this.state}
            />} />
          <Route
            exact path="/List"
            render={() => <List
              state={this.state}
            />} />
        </Router>
      </div>
    )
  }
}

export default App;
