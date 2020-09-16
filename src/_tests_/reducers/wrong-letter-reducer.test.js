import * as c from '../../actions/ActionTypes';
import wrongLetterReducer from '../../reducers/wrong-letter-reducer';

describe('wrongLetterReducer', () => {
  test('Should return default state if no action type is passed to the reducer', () => {
    expect(wrongLetterReducer(undefined, {type: null})).toEqual(0)
  });
  test('Should increment wrongLetters', () => {
    expect(wrongLetterReducer(undefined, {type: c.WRONG_LETTER})).toEqual(1)
  });
})