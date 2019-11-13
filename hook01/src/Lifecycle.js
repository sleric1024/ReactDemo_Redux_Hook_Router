import React, { Component } from 'react'

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  componentDidMount() {
    console.log(`ComponentDidMount => You clicked ${this.state.count} times.`);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`ComponentDidUpdate => You clicked ${this.state.count} times.`);
  }

  addCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times.</p>
        <button onClick={this.addCount.bind(this)}>Chlick Me</button>
      </div>
    )
  }
}
