import gameWordReducer from './game-word-reducer';
import guessedLettersReducer from './guessed-letters-reducer';
import winGameReducer from './win-game-reducer';
import wrongLetterReducer from './wrong-letter-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  gameWord: gameWordReducer,
  wrongLetters: wrongLetterReducer,
  guessedLetters: guessedLettersReducer,
  winGame: winGameReducer
});

export default rootReducer;