import * as c from "../actions/ActionTypes";

export default (state = 0, action) => {
  switch(action.type){
    case c.WRONG_LETTER:
      const newState = state + 1;
      return newState;
    case c.RESET_COUNT:
      return 0;
    default:
      return state;
  }
}