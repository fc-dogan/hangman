export default (state= "", action) => {
  switch(action.type){
    case 'SET_WORD':
      const newWord = "javascript";
      return newWord;
    default:
      return state;
  }

}