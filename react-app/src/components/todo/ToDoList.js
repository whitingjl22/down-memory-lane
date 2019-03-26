import React, { Component } from "react"

const ToDoList = (props) => {
  return (
    <div>
      <ul>
        {props.displayedItems.map((item, index) => {
          return (
            <li key={index}>
              <label className="list-item">{item.text}</label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ToDoList
