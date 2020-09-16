import * as c from "../actions/ActionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case c.ADD_LETTER:
      const newState = [ ...state, action.letter ];
      return newState;
    case c.RESET_LETTERS:
      return [];
    default:
      return state;
  }
};