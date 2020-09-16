import * as c from '../../actions/ActionTypes';
import winGameReducer from '../../reducers/win-game-reducer';

describe('winGameReducer', () => {
  test("Should return default state if there is no action type passed into the reducer", () =>  {
    expect(winGameReducer(undefined, {type: null})).toEqual(false);
  });
})
