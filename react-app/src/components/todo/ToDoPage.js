import React, { Component } from "react"
import AddToDoItems from "./AddToDoItems"
import ToDoList from "./ToDoList"
import ToDoFilters from "./ToDoFilters"

class ToDoPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: 1, text: "Learn React", status: "Completed" },
        { id: 2, text: "Build a todo app", status: "Active" },
        { id: 3, text: "Profit", status: "" },
        { id: 4, text: "Dinner", status: "Active" },
        { id: 5, text: "Workout", status: "Active" },
        { id: 6, text: "Homework", status: "Completed" },
        { id: 7, text: "Walk the dog", status: "Completed" }
      ],
      itemsLeft: 5,
      displayedItems: [
        { text: "Learn React" },
        { text: "Build a todo app" },
        { text: "Profit" },
        { text: "Dinner" },
        { text: "Workout" },
        { text: "Homework" },
        { text: "Walk the dog" }
      ]
    }
  }

  filter = (statusType) => {
    let filteredList

    if (statusType !== "All") {
      filteredList = this.state.items.filter((item) => item.status === statusType)
    } else filteredList = this.state.items
    this.setState({ displayedItems: filteredList })
  }

  render() {
    return (
      <div className="container">
        <h1>todos</h1>
        <AddToDoItems />
        <ToDoList displayedItems={this.state.displayedItems} />
        <ToDoFilters itemsLeft={this.state.itemsLeft} filterFunction={this.filter} />
      </div>
    )
  }
}

export default ToDoPage
