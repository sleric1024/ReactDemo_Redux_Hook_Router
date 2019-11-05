import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import { relative } from 'path';
import {changeInputAction, addItemAction, deleteItemAction} from './store/actionCreators'


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(store.getState());
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.onAddClicked = this.onAddClicked.bind(this);
    store.subscribe(this.storeChange);
  }

  changeInputValue(event) {
    const action = changeInputAction(event.target.value);
    store.dispatch(action);
  }

  storeChange() {
    this.setState(store.getState());
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
      <div>
        <div style={{ textAlign: 'center'}}>
          <Input placeholder={this.state.inputValue}
                 style={{ width: '250px', margin: '10px'}}
                 onChange={this.changeInputValue}
                 value={this.state.inputValue}
          />
          <Button type="primary"
                  onClick={this.onAddClicked}
          >Add</Button>
          <div>
            <List bordered
                  dataSource={this.state.dataList}
                  renderItem={(item, index)=> (
                    <div style={{position: "relative"}}>
                      <List.Item>{item}</List.Item>
                      <Button onClick={this.deleteItem.bind(this, index)}
                              type="danger"
                              style={{ position: "absolute", right: 0, top: 0}}
                      >X</Button>
                    </div>
                  )}
                  style={{ width: '40%', margin: '0 auto'}}>
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;