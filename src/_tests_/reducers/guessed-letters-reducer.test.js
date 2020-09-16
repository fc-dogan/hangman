import * as c from '../../actions/ActionTypes';
import guessedLettersReducer from '../../reducers/guessed-letters-reducer';

describe('guessedLetterReducer', () => {
  test('Should return default state if no action type is passed to the reducer', () => {
    expect(guessedLettersReducer([], {type:null})).toEqual([])
  });
});
