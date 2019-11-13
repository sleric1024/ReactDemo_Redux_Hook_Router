import React, {useContext} from 'react';
import {ColorContext} from './Color'

function ShowArea() {
  const {state} = useContext(ColorContext);
  return (
    <div>
      <h1 style={{color: state.color}}>The color of the font is {state.color}.</h1>
    </div>
  )
}

export default ShowArea;