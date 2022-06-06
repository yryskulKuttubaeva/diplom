import { useState } from "react";
import Example2 from "./Example2";

function Example1(props) {
  const [number, setNumber] = useState(0);
  function onDecrement() {
    setNumber(number - 1 )

  }
  function onIncrement() {
    setNumber(number + 1 )
  }

  return (
    <div className="Example1"> 
    <button onClick={onDecrement}>-</button>
    <Example2 
        number={number} onIncrement={onIncrement}/>
    </div>
  )

}
export default Example1;