import React from 'react';
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";
import Main from './Main';
import './Main.css'
import Video from './Video';
import Tips from './Tips';

function AppRouter() {
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
            <h3>First Level NavBar</h3>
            <ul>
                <li> <Link to="/">Blog</Link> </li>
                <li><Link to="/video/">Videos</Link> </li>
                <li><Link to="/tips/">Tips</Link> </li>
            </ul>
        </div>

        <div className="rightMain">
          <Route path="/"  exact component={Main} />
          <Route path="/video/" component={Video} />
          <Route path="/tips/"  component={Tips} />
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;