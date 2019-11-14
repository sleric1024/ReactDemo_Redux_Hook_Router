import React, {useMemo} from 'react';

function ChildComponent(props) {
  function changeDog(name) {
    console.log("CHANGE_CHANGE_CHANGE");
    return name + ' COMING';
  }

  const actionDog = useMemo(() => changeDog(props.name), [props.name]);

  return (
    <div>
        <h1>{actionDog}</h1>
        <h1>{props.children}</h1>
    </div>
  )
}

export default ChildComponent;