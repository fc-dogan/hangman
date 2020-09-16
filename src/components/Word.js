import React from 'react';
import PropTypes from "prop-types";

function Word(props){

 
  return (
    <React.Fragment>
     <p>{props.word.split('').map(letter => {
    if(props.guessedLetters.includes(letter)){
      return letter
    } else {
      return " _ ";
    }
    })}
  </p>
     
    </React.Fragment>
    
  )
}

Word.propTypes ={
  word: PropTypes.string,
  guessedLetters: PropTypes.array
}

export default Word;
