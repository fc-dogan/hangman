import * as c from '../../actions/ActionTypes';
import guessedLettersReducer from '../../reducers/guessed-letters-reducer';

describe('guessedLetterReducer', () => {
  test('Should return default state if no action type is passed to the reducer', () => {
    expect(guessedLettersReducer([], {type:null})).toEqual([])
  });

  test("Should successfully add a letter to the guessedLetter array", () => {
    const currentState = [ "a", "b" ];
    const action = {
      type: c.ADD_LETTER,
      letter: "c"
    };
    expect(guessedLettersReducer(currentState, action)).toEqual([  "a", "b", "c" ]);
  });

  test("Should reset guessedLetter array to an empty array", () => {
    const currentState = [ "a", "b", "c" ];
    const action = { type: c.RESET_LETTERS };
    expect(guessedLettersReducer(currentState, action)).toEqual([]);
  });
});
