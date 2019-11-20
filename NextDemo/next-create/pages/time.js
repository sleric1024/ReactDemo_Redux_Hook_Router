import React, {useState} from 'react'
import dynamtic from 'next/dynamic'

const LazyPage = dynamtic(import('../components/LazyPage'));

function Time() {
  const [time, setTime] = useState(Date.now());

  // Performance Issue
  // const changeTime = () => {
  //   setTime(moment(Date.now()).format());
  // }

  // Imporved Way
  const changeTime = async () => {
    const moment = await import('moment');
    setTime(moment.default(Date.now()).format());
  }


  return (
    <div>
      <h1>Current Time: {time}</h1>
      <button onClick={changeTime}><h1>Format Time</h1></button>
      <LazyPage></LazyPage>
    </div>
  );
}

export default Time;