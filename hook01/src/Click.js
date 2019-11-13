import React, { Component } from 'react'

export default class Click extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.addCount = this.addCount.bind(this);
  }

  addCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.addCount}>CLICK ME!</button>
      </div>
    )
  }
}
