import { Provider } from "react-redux";
import "./App.css";
// import CounterStateExample from "./CounterStateExample";
// import CounterContextExample from "./CounterContextExample";
// import CounterReducerExample from "./CounterReducerExample";
import store from "./store";
import CounterReduxExample from "./CounterReduxExample";
// import CounterProvider from "./contexts/CounterContext";

function App() {
  return (
    <Provider store={store}>
      <>
        {/* <CounterStateExample /> */}
        {/* <CounterProvider>
        <CounterContextExample />
      </CounterProvider> */}
        {/* <CounterReducerExample /> */}
        <CounterReduxExample />
      </>
    </Provider>
  );
}

export default App;
