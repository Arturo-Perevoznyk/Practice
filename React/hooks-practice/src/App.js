import React, { useState } from 'react';

function Button(props) {
  return (<div>
    <button onClick={props.handleClick}>{props.message}</button>
  </div>)
}

function Counter (props) {
  return <p>You clicked {props.number} times!</p>
}

export default function App() {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    setNumber(number => number +1)
  }
  return (
    <div>
      <Button message='Click me!' handleClick={handleClick}/>
      <Counter number={number} />
    </div>
  );
}


