import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

// const listData = [
//   'Today',
//   'Tomorrow',
//   'The day after tomorrow'
// ];

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(store.getState())
    this.state = store.getState()
  }
  render() {
    return (
      <div>
        <div style={{ textAlign: 'center'}}>
          <Input placeholder={this.state.inputValue}
                 style={{ width: '250px', margin: '10px'}}>

          </Input>
          <Button type="primary">
            Add
          </Button>
          <div>
            <List bordered
                  dataSource={this.state.dataList}
                  renderItem={item=> (<List.Item>{item}</List.Item>)}
                  style={{ width: '600px', margin: '0 auto'}}>
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;