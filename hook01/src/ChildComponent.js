import React, {useMemo, useCallback} from 'react';

function ChildComponent(props) {
  function changeDog(name) {
    console.log(name + "CHANGE_CHANGE_CHANGE");
    return name + ' COMING';
  }

  //const actionDog = useMemo(() => changeDog(props.name), [props.name]);
  const actionDog = useCallback(
    () => {
      return changeDog(props.name);
    },
    [props.name],
  );

  return (
    <div>
        <h1>{actionDog()}</h1>
        <h1>{props.children}</h1>
    </div>
  )
}

export default ChildComponent;