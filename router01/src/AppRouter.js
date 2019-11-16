import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Index from './Pages/Index';
import List from './Pages/List';
import Home from './Pages/Home';

function AppRouter() {
  return (
    <div>
      <Router>
        <ul>
          <li><Link to="/">Main Page</Link></li>
          <li><Link to="/list/123">List Page</Link></li>
        </ul>
        <Route path="/" exact component={Index}></Route>
        <Route path="/list/:id" component={List}></Route>
        <Route path='/home' component={Home}></Route>
      </Router>
    </div>
  );
}

export default AppRouter;