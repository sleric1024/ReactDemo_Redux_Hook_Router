import React, {useState} from 'react';
import Router, { withRouter } from 'next/Router'
import Link from 'next/Link'
import Axios from 'axios'

const welcome = ({router, title}) => {
  const [color, setColor] = useState('blue');

  const changeColor = () => {

    setColor(color === 'red' ? 'blue' : 'red');
  }

  return (
    <div>
      <h1>Welcome {router.query.name} !</h1>
      <Link href="/"><a>Go to Main Page</a></Link>
      <h2>{title}</h2>
      <button onClick={changeColor}><h1>Change Color</h1></button>
      <style jsx>
        {`
          div{color: ${color}
        `}
      </style>
    </div>
  )
}

welcome.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    Axios('http://jsonplaceholder.typicode.com/db').then(
      (res) => {
        console.log(res);
        resolve(res.data.posts[Math.ceil(Math.random() * 10)]);
      }
    )
  });

  return promise;
}

export default withRouter(welcome);