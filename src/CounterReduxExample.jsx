import { useDispatch, useSelector } from "react-redux";
import * as ActionTypes from "./store/ActionTypes";

function CounterReduxExample() {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: ActionTypes.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ActionTypes.DECREMENT });
  };

  return (
    <div>
      <h1>Counter Reducer Example</h1>
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

export default CounterReduxExample;
