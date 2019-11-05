import React, { Component } from 'react';
import { Input, Button, List } from 'antd'

class TodoListUI extends Component {
  state = {  }
  render() {
    return (
      <div>
        <div style={{ textAlign: 'center'}}>
          <Input placeholder={this.props.inputValue}
                 style={{ width: '250px', margin: '10px'}}
                 onChange={this.props.changeInputValue}
                 value={this.props.inputValue}
          />
          <Button type="primary"
                  onClick={this.props.onAddClicked}
          >Add</Button>
          <div>
            <List bordered
                  dataSource={this.props.dataList}
                  renderItem={(item, index)=> (
                    <div style={{position: "relative"}}>
                      <List.Item>{item}</List.Item>
                      <Button onClick={(event) => {this.props.deleteItem(index, event)}}
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

export default TodoListUI;