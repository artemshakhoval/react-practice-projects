import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initState = {
  counter: 0,
  showCounter: true,
};

createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const counterReducer = (state = initState, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.payload,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "SHOW") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
