import React, { Component } from "react"

const ToDoFilter = (props) => {
  return (
    <div>
      <label className="items-left">{`${props.itemsLeft} items left`}</label>
      <ul>
        <li>
          <a onClick={() => props.filterFunction("All")} href="#">
            All
          </a>
        </li>
        <li>
          <a onClick={() => props.filterFunction("Active")} href="#">
            Active
          </a>
        </li>
        <li>
          <a onClick={() => props.filterFunction("Completed")} href="#">
            Completed
          </a>
        </li>
        <li>
          <a href="#">Clear Completed</a>
        </li>
      </ul>
    </div>
  )
}

export default ToDoFilter
