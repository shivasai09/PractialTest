import { combineReducers, createStore } from "redux";

const initialState = [
  {
    title: "i am book1",
    description: "vasfdfsf",
  },
  {
    title: "i am book2",
    description: "vasfdfsf",
  },
  {
    title: "i am book3",
    description: "vasfdfsf",
  },
];
const notes = (state = initialState, action) => {
  switch (action.type) {
    case "remove":
      const index = action.index;
      const newState = state
        .slice(0, index)
        .concat(state.slice(index + 1, state.length));
      return newState;
    case "add":
      return [...state].concat([action.item]);
    default:
      return state;
  }
};

const reudcers = combineReducers({
  notes,
});

export const store = createStore(reudcers);
