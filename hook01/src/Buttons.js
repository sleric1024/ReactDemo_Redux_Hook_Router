import React, {useContext} from 'react';
import {ColorContext, UPDATE_COLOR} from './Color';

function Buttons() {
  const {dispatch} = useContext(ColorContext);
  return (
    <div>
      <button onClick={() => dispatch({color: "red", type: UPDATE_COLOR})}>Red</button>
      <button onClick={() => dispatch({color: "yellow", type: UPDATE_COLOR})}>Yellow</button>
    </div>
  )
}

export default Buttons;