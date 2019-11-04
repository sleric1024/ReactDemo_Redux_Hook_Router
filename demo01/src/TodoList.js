import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';

const listData = [
  'Today',
  'Tomorrow',
  'The day after tomorrow'
];

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <div>
        <div style={{ textAlign: 'center'}}>
          <Input placeholder='Input something'
                 style={{ width: '250px', margin: '10px'}}>

          </Input>
          <Button type="primary">
            Add
          </Button>
          <div>
            <List bordered
                  dataSource={listData}
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