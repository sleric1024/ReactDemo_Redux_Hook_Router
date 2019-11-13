import React, {useReducer} from 'react';

function TestReducer() {
  const initialValue = {
    count: 1,
    name: 'test'
  };

  const initState = (values) => {
    return values;
  }

  const [state, dispath] = useReducer((preState, action) => {
    switch (action) {
      case 'add':
        return {
          count: preState.count + 1,
          name: "add"
        };
      case 'sub':
        return {
          count: preState.count + 1,
          name: "sub"
        };
      default:
        return;
    }
  }, initialValue, initState);

  return (
    <div>
      <h2>
        The count is: {state.count} with {state.name}
      </h2>
      <button onClick={() => dispath('add')}>Increment</button>
      <button onClick={() => dispath('sub')}>Decrement</button>
    </div>
  );
}

export default TestReducer;