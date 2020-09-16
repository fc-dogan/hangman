import WordList from '../components/WordList';
import * as c from '../actions/ActionTypes';

export default (state= "", action) => {
  switch(action.type){
    case c.GAME_WORD:
      const newWord = WordList[Math.floor(Math.random() * WordList.length)];
      return newWord;
    default:
      return state;
  }

}