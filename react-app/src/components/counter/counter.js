import React, { Component } from "react"

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counters: [{ count: 0 }]
    }
  }

  AddCounter = () => {
    // console.log("AddCounter INVOKED!");

    // "counters" is the key in the constructor above
    // spread over the object and add a new object with a
    // key of "count" and a value of "0"
    this.setState({ counters: [...this.state.counters, { count: 0 }] })
  }
  IncrementCounter = (idx) => {
    // console.log("Increment Counter INVOKED!");
    // console.log("idx = ", idx);
    // console.log(this.state.counters[idx]);
    this.state.counters[idx].count++
    this.setState({
      counters: this.state.counters
    })
  }
  DecrementCounter = (idx) => {
    // console.log("Decrement Counter INVOKED!");
    // console.log("idx = ", idx);
    // console.log(this.state.counters[idx]);
    this.state.counters[idx].count--
    this.setState({
      counters: this.state.counters
    })
  }

  render() {
    const mappedCounters = this.state.counters.map((currentValueCounter, idx) => {
      return (
        <div key={idx} className="counterMain">
          <h1>Count: {currentValueCounter.count}</h1>
          <button
            onClick={() => {
              this.IncrementCounter(idx)
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              this.DecrementCounter(idx)
            }}
          >
            Decrement
          </button>
        </div>
      )
    })
    return (
      <div>
        <button onClick={this.AddCounter}>Add Another Counter</button>
        {mappedCounters}
      </div>
    )
  }
}

export default Counter
