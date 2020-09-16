import * as c from '../../actions/ActionTypes';
import winGameReducer from '../../reducers/win-game-reducer';

describe('winGameReducer', () => {
  test("Should return default state if there is no action type passed into the reducer", () =>  {
    expect(winGameReducer(undefined, {type: null})).toEqual(null);
  });
  test("Should successfully change the state to true", () => {
    expect(winGameReducer({}, {type: c.WIN_GAME})).toEqual(true);
  });
  test("Should successfully change the state to false", () => {
    expect(winGameReducer({}, {type: c.LOSE_GAME})).toEqual(false);
  });

  it("Should successsfully reset game state null", () => {
    expect(winGameReducer(false, {type: c.RESET_GAME})).toEqual(null);
  })
})
