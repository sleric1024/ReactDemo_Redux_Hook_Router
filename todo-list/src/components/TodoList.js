import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button, List } from 'antd';
import {getTodoList} from '../redux/actions';
import store from '../redux/store';
import '../static/style.css';
import {deleteItemAction, doneItemAction} from '../redux/actions';

class TodoList extends Component {
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
                    <Button type="primary" danger onClick={() => {
                      this.props.deleteItemAction(item.id);
                    }}>Delete</Button>,
                    <Button type="primary" onClick={() => {
                      this.props.doneItemAction(item.id, item.done);
                    }}>Done</Button>]}>
                    <div className={item.done ? 'listContent done' : 'listContent'}>{item.content}</div>
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
  {deleteItemAction, doneItemAction}
)(TodoList);