import React, { Component } from 'react'
import 'antd/dist/antd.css'
import TodoListUI from './TodoListUI'
import store from './store'
import { relative } from 'path';
import {changeInputAction, addItemAction, deleteItemAction, getListAction} from './store/actionCreators'
import axios from 'axios'


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(store.getState());
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.onAddClicked = this.onAddClicked.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.storeChange);
  }

  changeInputValue(event) {
    const action = changeInputAction(event.target.value);
    store.dispatch(action);
  }

  storeChange() {
    this.setState(store.getState());
  }

  componentDidMount() {
    console.log('didMount');
    //https://www.easy-mock.com/mock/5dc18cbb43ff8e61fd932c49/demo01/getListDemo
    axios.get('http://localhost:3000/data').then(res => {
      const data = res;
      const action = getListAction(data);
      store.dispatch(action);
    });
  }


  onAddClicked(event) {
    if (!this.state.inputValue) {
      return;
    }
    store.dispatch(addItemAction());
  }

  deleteItem(index, event) {
    store.dispatch(deleteItemAction(index));
  }

  render() {
    return (
      <TodoListUI
          inputValue={this.state.inputValue}
          onChange={this.changeInputValue}
          onClick={this.onAddClicked}
          dataList={this.state.dataList}
          deleteItem={this.deleteItem}
          onAddClicked={this.onAddClicked}
          changeInputValue={this.changeInputValue}
      />
    );
  }
}

export default TodoList;