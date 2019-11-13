import React, {useState, useEffect} from 'react';

function UseEffect () {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`UseEffect => You clicked ${count} times.`);
  })

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={()=> {setCount(count + 1)}}>Click Me</button>
    </div>
  );
}

export default UseEffect;