import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const resetCount = () => ({
  type: "RESET"
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      //   const decrementBy =
      //     typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - action.decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};

// creasteStore need a function to be the first argument
// the first argument we passed to the createStore is the current state, setup the default
const store = createStore(countReducer);

// store.subscribe take in a function, to watch the redux store for every changes.
const unsubscibe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch({
//   type: "INCREMENT"
// });
store.dispatch(incrementCount());

// store.dispatch({
//   type: "RESET"
// });
store.dispatch(resetCount());

// store.dispatch({
//   type: "DECREMENT"
// });
store.dispatch(decrementCount());

// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 10
// });
store.dispatch(decrementCount({ decrementBy: 10 }));
