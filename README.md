# Redux Revision

## Why Redux?

Redux is a predictable state container for JavaScript apps. It helps manage complex state and share state between multiple components without prop drilling. It is especially useful in larger apps with multiple components needing access to shared state.

## Components of Redux

Redux is composed of Actions, Reducers, Store, and Dispatch.

- **Actions**: Payloads of information sent to the store.
- **Reducers**: Functions that specify how the app's state changes in response to actions.
- **Store**: Holds the application state.
- **Dispatch**: Method of the store used to dispatch actions.

```javascript
const incrementAction = {
  type: "INCREMENT",
};

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
}

const store = createStore(counter);
store.dispatch(incrementAction);
```

## Setting the Initial State in Redux

The initial state of the Redux store can be defined when creating the store.

```javascript
const initialState = {
  todos: [],
};

const store = createStore(reducer, initialState);
```

## Structuring Top-Level Directories in Redux

Organize your Redux code into directories for actions, reducers, and store.

- `actions/userActions.js`
- `reducers/userReducer.js`
- `store/store.js`

## React Redux vs. React's Context API

React Redux is a binding of Redux to React. It's useful for more complex state management. Context API is a feature of React for simpler global state.

## Things to Avoid Inside a Reducer

Reducers must be pure functions. Avoid mutating state, making API calls, or causing side effects.

```javascript
return {
  ...state,
  todos: [...state.todos, action.payload],
};
```

## Typical Data Flow in a React and Redux App

Actions are dispatched and handled by reducers to produce a new state. The store updates, and React components re-render with the new state.

## Redux Store Methods

The Redux store has methods like `getState()`, `dispatch(action)`, and `subscribe(listener)`.

```javascript
const store = createStore(reducer);
console.log(store.getState());
store.dispatch({ type: "ADD_TODO", payload: "Learn Redux" });
store.subscribe(() => {
  console.log("State updated:", store.getState());
});
```
