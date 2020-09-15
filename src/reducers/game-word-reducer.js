import WordList from '../components/WordList';

export default (state= "", action) => {
  switch(action.type){
    case 'GAME_WORD':
      const newWord = WordList[Math.floor(Math.random() * WordList.length)];
      return newWord;
    default:
      return state;
  }

}