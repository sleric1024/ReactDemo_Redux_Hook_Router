import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function RouterTest () {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`UseEffect => You clicked ${count} times.`);
    return () => {
      console.log('===========');
    }
  }, [])

  function Index() {
    useEffect(() => {
      console.log('Index page useEffect!');
      return () => {
        console.log('Leave Index page!');
      }
    }, [])
    return <h2>JSPang.com</h2>;
  }

  function List() {
    useEffect(() => {
      console.log('List page useEffect!');
      return () => {
        console.log('Leave List page!');
      }
    })
    return <h2>List-Page</h2>;
  }

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={()=> {setCount(count + 1)}}>Click Me</button>


      <Router>
        <ul>
          <li><Link to="/">Main Page</Link></li>
          <li><Link to="/list">List Page</Link></li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/" component={List} />
      </Router>
    </div>
  );
}

export default RouterTest;