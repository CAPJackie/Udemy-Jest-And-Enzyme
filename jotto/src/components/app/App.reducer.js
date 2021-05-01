import { toggleSuccess } from "./App.actions";

export const appInitialState = {
  success: false,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case toggleSuccess:
      return { ...state, success: action.success };
    default:
      return { ...state };
  }
};
