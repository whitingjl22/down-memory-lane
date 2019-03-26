import React, { Component } from "react"
import "./App.css"
import "react-router"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Counter from "./components/counter/Counter"
import AddToDoItems from "./components/todo/AddToDoItems"
import ToDoFilters from "./components/todo/ToDoFilters"
import ToDoList from "./components/todo/ToDoList"
import ToDoPage from "./components/todo/ToDoPage"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* This is our Navigation Menu*/}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/todopage">ToDo</Link>
            </li>
          </ul>
          {/* This is how we define what components should render based off of the url */}
          {/* <Route exact path="/" component={State} /> */}
          <Route path="/counter" component={Counter} />
          <Route path="/todopage" component={ToDoPage} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
