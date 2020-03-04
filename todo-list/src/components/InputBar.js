import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button} from 'antd';
import '../static/style.css';
import {onAddTodo, doneTestAction} from '../redux/actions';

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
        {/* <Button type="primary" onClick={() => {
          this.props.doneTestAction();
        }}>Test</Button> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    inputState: state.inputbar.test
  };
};

export default connect(
  mapStateToProps,
  {onAddTodo, doneTestAction}
)(InputBar);
