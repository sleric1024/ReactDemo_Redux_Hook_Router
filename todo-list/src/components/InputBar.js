import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button} from 'antd';
import { getTodoList } from '../redux/actions';
import store from '../redux/store';
import '../static/style.css';

class InputBar extends Component {
  render() {
    return (
      <div className="inputArea">
        <Input className="inputBar"></Input>
        <Button type="primary">Add</Button>
      </div>
    )
  }
}

export default InputBar;
