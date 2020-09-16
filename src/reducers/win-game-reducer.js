import * as c from "../actions/ActionTypes";

export default (state = null, action) => {
  switch (action.type){
    case c.WIN_GAME:
      const newState = true
      return newState;
    case c.LOSE_GAME:
      const nState = false;
      return nState;
    case c.RESET_GAME:
      return null;
    default:
      return state;
  }
}