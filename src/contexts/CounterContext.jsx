/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CounterContext = createContext();

export default function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <CounterContext.Provider
      value={{
        counter,
        increment,
        decrement,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}
