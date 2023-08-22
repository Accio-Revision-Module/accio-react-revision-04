import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return state + 1;
    case ACTIONS.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

function CounterReducerExample() {
  const [counter, dispatch] = useReducer(reducer, 0);

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
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

export default CounterReducerExample;
