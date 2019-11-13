import React, { useState } from 'react'

function HookClick() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {setCount(count + 1)}}>CLICK ME!</button>
    </div>
  )
}

export default HookClick;
