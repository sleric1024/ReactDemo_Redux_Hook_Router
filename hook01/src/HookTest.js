import React, {useState, useEffect, useCallback} from 'react';

function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  const onResize = useCallback(
    () => {
      setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      });
    },[]);

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [])

  return size;
}

function HookTest() {
  const size = useWinSize();

  return (
    <div>
      <h1>Window Width: {size.width}</h1>
      <h1>Window Height: {size.height}</h1>
    </div>
  );
}

export default HookTest;