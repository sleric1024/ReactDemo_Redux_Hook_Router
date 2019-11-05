import React, { Component } from 'react';
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
  return (
    <div>
      <div style={{ textAlign: 'center'}}>
        <Input placeholder={props.inputValue}
               style={{ width: '250px', margin: '10px'}}
               onChange={props.changeInputValue}
               value={props.inputValue}
        />
        <Button type="primary"
                onClick={props.onAddClicked}
        >Add</Button>
        <div>
          <List bordered
                dataSource={props.dataList}
                renderItem={(item, index)=> (
                  <div style={{position: "relative"}}>
                    <List.Item>{item}</List.Item>
                    <Button onClick={(event) => {props.deleteItem(index, event)}}
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

// class TodoListUI extends Component {
//   state = {  }
//   render() {
//     return (
//       <div>
//         <div style={{ textAlign: 'center'}}>
//           <Input placeholder={this.props.inputValue}
//                  style={{ width: '250px', margin: '10px'}}
//                  onChange={this.props.changeInputValue}
//                  value={this.props.inputValue}
//           />
//           <Button type="primary"
//                   onClick={this.props.onAddClicked}
//           >Add</Button>
//           <div>
//             <List bordered
//                   dataSource={this.props.dataList}
//                   renderItem={(item, index)=> (
//                     <div style={{position: "relative"}}>
//                       <List.Item>{item}</List.Item>
//                       <Button onClick={(event) => {this.props.deleteItem(index, event)}}
//                               type="danger"
//                               style={{ position: "absolute", right: 0, top: 0}}
//                       >X</Button>
//                     </div>
//                   )}
//                   style={{ width: '40%', margin: '0 auto'}}>
//             </List>
//           </div>
//         </div>
//       </div>
//      );
//   }
// }

export default TodoListUI;