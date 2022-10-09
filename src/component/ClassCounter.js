import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increase = this.increase.bind(this);
    //  All functions in Javascript have a bind method, which allow you to specify the value for this. Once a function has been “bound” the context can’t be overriden, meaning that we have a guarantee that this will refer to the correct thing.
    //  This approach is a little bit harder to understand for other programmers and if you’re working with deeply nested, asynchronous code, then you’ll find yourself having to remember to bind each function as you go.
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Simple counter using Class based components</h1>
        <h2> {this.state.count}</h2>
        <button onClick={this.increase}> Add</button>
      </div>
    );
  }
}

export default ClassCounter;
