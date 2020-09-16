import * as c from '../../actions/ActionTypes';
import wrongLetterReducer from '../../reducers/wrong-letter-reducer';

describe('wrongLetterReducer', () => {
  test('Should return default state if no action type is passed to the reducer', () => {
    expect(wrongLetterReducer(undefined, {type: null})).toEqual(0)
  });
  test('Should increment wrongLetter', () => {
    expect(wrongLetterReducer(undefined, {type: c.WRONG_LETTER})).toEqual(1)
  });
  test('Should reset wrongLetter count to 0', () => {
    expect(wrongLetterReducer(4, {type: c.RESET_COUNT})).toEqual(0)
  });
})
