import React, { useRef, useState, useEffect } from 'react';

function UseRefTest() {
  const inputRef = useRef(null);
  const onButtonClick = () => {
    console.log(inputRef);
  }

  const [text, setText] = useState('Hello');
  const textRef = useRef();

  useEffect(() => {
    textRef.current = text;
    console.log(textRef.current)
  });

  return (
    <div>
      <input ref={inputRef} type="text"></input>
      <button onClick={onButtonClick}>SHOW TEXT</button>
      <br></br>
      <br></br>
      <input type="text" value={text} onChange={(e) => {setText(e.target.value)}}></input>
      <h1 ref={textRef}>{text}</h1>
    </div>
  );
}

export default UseRefTest;