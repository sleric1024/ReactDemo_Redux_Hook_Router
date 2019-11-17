import React from 'react';
import {  Route, Link  } from 'react-router-dom';
import ReactInfo from './ReactInfo'
import VueInfo from './VueInfo'
import FlutterInfo from './FlutterInfo'

function Video() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/video/reactpage">React Learning</Link></li>
          <li><Link to="/video/vue">Vue Learning</Link></li>
          <li><Link to="/video/flutter">Flutter Learning</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div><h3>Video Info</h3></div>
        <Route path="/video/reactpage/" component={ReactInfo} />
        <Route path="/video/vue/"  component={VueInfo} />
        <Route path="/video/flutter/"   component={FlutterInfo} />
      </div>
    </div>
  );
}

export default Video;