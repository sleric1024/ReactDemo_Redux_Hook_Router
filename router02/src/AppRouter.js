import React from 'react';
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";
import Main from './Main';
import './Main.css'
import Video from './Video';
import Tips from './Tips';

function AppRouter() {
  let routerConfig = [
    {path: '/', title: 'Blog', exact: true, component: Main},
    {path: '/video/', title: 'Videos', exact: false, component: Video},
    {path: '/tips', title: 'Tips', exact: false, component: Tips}
  ]
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
            <h3>First Level NavBar</h3>
            <ul>
                {
                  routerConfig.map((item, index) => {
                    return (
                    <li key={index}><Link to={item.path}>{item.title}</Link></li>
                    );
                  })
                }
            </ul>
        </div>

        <div className="rightMain">
          {
            routerConfig.map((item, index) => {
              return (
                <Route key={index} path={item.path} exact={item.exact} component={item.component}></Route>
              );
            })
          }
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;