import React, {createContext, useReducer} from 'react';

export const ColorContext = createContext();

export const UPDATE_COLOR = "UPDATE_COLOR";

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return {
        color: action.color
      };
    default:
      return state;
  }
}

export const Color = props => {
  const [state, dispatch] = useReducer(reducer, {color: 'blue'});
  return (
    <ColorContext.Provider value={{state, dispatch}}>
      {props.children}
    </ColorContext.Provider>
  )
}
