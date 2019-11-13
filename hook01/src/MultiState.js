import React, { useState } from 'react'

function MultiState() {
  const [age, setAge] = useState(18);
  const [name, setName] = useState("David");
  const [gender, setGender] = useState("Male");

  return (
    <div>
      <p>Age: {age}</p>
      <p>Name: {name}</p>
      <p>Gender: {gender}</p>
    </div>
  )
}

export default MultiState;
