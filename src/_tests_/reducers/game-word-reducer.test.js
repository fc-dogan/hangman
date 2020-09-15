import gameWordReducer from '../../reducers/game-word-reducer';
 const wordList = ["javascript", "pyton", "csharp"];
 let action;
describe('gameWordReducer', () => {
  test('Should return a default state if no action type passed into reducer', () => {
    expect(gameWordReducer(undefined, { type: null })).toEqual("");
  });
  
    test('Should successfully add a new word to state', () => {
      action = {
        type: "SET_WORD",
        gameWord: wordList[0]
      }
      expect(gameWordReducer(undefined, action)).toEqual("javascript")
    })
})
