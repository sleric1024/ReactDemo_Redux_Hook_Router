import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [{
        id: 111,
        content: "This is the first item"
      },{
        id: 222,
        content: "This is the second item"
      },{
        id: 333,
        content: "This is the third item"
      }]
    };
  }
  render() {
    return (
      <div>
        <h1>This is index page</h1>
        <ul>
          {
            this.state.dataList.map((item, index) => {
              return (
                <li key={item.id}>
                  <Link to={'/list/' + item.id}>
                    {item.content}
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    )
  }
}
