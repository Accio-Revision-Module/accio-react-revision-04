import { useState } from "react";

function CounterStateExample() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Counter State Example</h1>
      <p>
        <div>
          <button onClick={decrement}>-1</button>
        </div>
        Counter: {counter}
        <div>
          <button onClick={increment}>+1</button>
        </div>
      </p>
    </div>
  );
}

export default CounterStateExample;
