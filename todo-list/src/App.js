import React from 'react';
import './App.css';
import Todo from './components/Todo';
import store from './redux/store';
import {Provider} from 'react-redux';
import 'antd/dist/antd.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo></Todo>
      </div>
    </Provider>
  );
}

export default App;
