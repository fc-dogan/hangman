import gameWordReducer from '../../reducers/game-word-reducer';
 
describe('gameWordReducer', () => {
  test('Should return a default state if no action type passed into reducer', () => {
    expect(gameWordReducer(undefined, { type: null })).toEqual("");
  });
  
    test('Should successfully add a new word to state', () => {
      expect(gameWordReducer(undefined, { type: "GAME_WORD" }).length).toBeGreaterThan(0);
    })
})
