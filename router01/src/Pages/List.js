import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let pramId = this.props.match.params.id;
    this.setState({
      id: pramId
    });
  }

  render() {
    return (
      <div><h1>This is list page: {this.state.id}</h1></div>
    );
  }
}

export default List;