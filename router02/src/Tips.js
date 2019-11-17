import React from 'react';
import {  Route, Link  } from 'react-router-dom';
import TipA from './TipA';
import TipB from './TipB';

function Tips() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/tips/tipA">Tip A</Link></li>
          <li><Link to="/tips/tipB">Tips B</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div><h3>Tips Info</h3></div>
        <Route path="/tips/tipA/" component={TipA} />
        <Route path="/tips/tipB/"  component={TipB} />
      </div>
    </div>
  );
}

export default Tips;