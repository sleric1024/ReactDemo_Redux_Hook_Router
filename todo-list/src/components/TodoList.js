import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button, List } from 'antd';
import {getTodoList} from '../redux/actions';
import store from '../redux/store';
import '../static/style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   items: props.items
    // }
  }

  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
  }

  render() {
    return (
      <div className="todoList">
        <List bordered
              dataSource={this.props.todoList}
              renderItem={(item, index)=> (
                  <List.Item actions={[
                      <Button type="primary" danger>Delete</Button>,
                      <Button type="primary">Done</Button>]}>
                      <div className="listContent">{item.content}</div>
                  </List.Item>

              )}
              style={{ width: '60%', margin: '0 auto'}}>
          </List>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todoList: state.todo.todoList
  };
};

export default connect(
  mapStateToProps,
  {

  }
)(TodoList);