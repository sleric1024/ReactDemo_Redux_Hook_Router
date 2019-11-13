import React, {useReducer} from 'react';
import ShowArea from './ShowArea';
import Buttons from './Buttons';
import { Color } from './Color';


function ReducerDemo() {
  return (
    <div>
      <Color>
        <ShowArea></ShowArea>
        <Buttons></Buttons>
      </Color>
    </div>
  )
}

export default ReducerDemo;