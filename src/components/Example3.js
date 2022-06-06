import { useState } from "react";

function Example3() {
    const [number, setNumber] = useState(0);

    return (
      <div className="Example3">
        {number}
        <button onClick={() => setNumber(number + 1)}>+</button>
        <button onClick={() => setNumber(number - 1)}>-</button>
      </div>
    )
}
  
  export default Example3;