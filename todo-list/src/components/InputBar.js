import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button} from 'antd';
import { getTodoList } from '../redux/actions';
import store from '../redux/store';
import '../static/style.css';
import {onAddTodo} from '../redux/actions';

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  _onAdd = () => {
    const inputValue = this.state.input;

    if (inputValue) {
      // redux thunk
      this.props.onAddTodo(inputValue);

      this.setState({
        input: ''
      });
    }
  }

  _onChange = (input) => {
    this.setState({
      input
    });
  }

  render() {
    return (
      <div className="inputArea">
        <Input className="inputBar" value={this.state.input} onChange={e => this._onChange(e.target.value)}></Input>
        <Button type="primary" onClick={this._onAdd}>Add</Button>
      </div>
    )
  }
}

export default connect(
  null,
  {onAddTodo}
)(InputBar);
