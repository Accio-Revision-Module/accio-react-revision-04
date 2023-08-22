import * as ActionTypes from "../ActionTypes";

const initialState = {
  counter: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        counter: state.counter + 1,
      };
    case ActionTypes.DECREMENT:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

export default counterReducer;
