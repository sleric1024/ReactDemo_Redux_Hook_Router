import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function Index() {
  return (
    <div><h1>This is index page</h1></div>
  );
}

function List() {
  return (
    <div><h1>This is list page</h1></div>
  );
}

function AppRouter() {
  return (
    <div>
      <Router>
        <ul>
          <li><Link to="/">Main Page</Link></li>
          <li><Link to="/list/">List Page</Link></li>
        </ul>
        <Route path="/" exact component={Index}></Route>
        <Route path="/list" component={List}></Route>
      </Router>
    </div>
  );
}

export default AppRouter;