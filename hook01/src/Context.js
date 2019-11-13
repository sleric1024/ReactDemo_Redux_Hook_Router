import React, {useState, createContext, useContext} from 'react';

const CountContext = createContext();

function Counter() {
  const count = useContext(CountContext);
  return (<h2>{count.number}</h2>)
}

function Context () {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={()=> {setCount(count + 1)}}>Click Me</button>
      <CountContext.Provider value={{'number': count}}>
        <Counter />
      </CountContext.Provider>
    </div>
  );
}

export default Context;