import { useContext } from "react";
import { CounterContext } from "./contexts/CounterContext";

function ContextContextExample() {
  const { counter, increment, decrement } = useContext(CounterContext);

  return (
    <div>
      <h1>Counter Context Example</h1>
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

export default ContextContextExample;
