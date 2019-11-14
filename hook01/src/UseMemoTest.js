import React, {useState, useMemo} from 'react';
import ChildComponent from './ChildComponent';

function UseMemoTest() {
  const [dog, setDogName] = useState('Dog');
  const [cat, setCatName] = useState('Cat');

  return (
    <div>
      <button onClick={()=>{setDogName(new Date().getTime() + "DOG COMES")}}>SAY DOG</button>
      <button onClick={()=>{setCatName(new Date().getTime() + "CAT COMES")}}>SAY CAT</button>
      <ChildComponent name={dog}>{cat}</ChildComponent>
    </div>
  );
}

export default UseMemoTest;