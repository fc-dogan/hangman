import React from 'react';
import PropTypes from 'prop-types';


function LetterList(props){

  const allLetterList = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  const handleClick =(letter) =>{
    props.onLetterClick(letter);
    props.countMistakes(letter);
  }


  return(
    <React.Fragment>
      {allLetterList.map(letter => {
        if (!props.guessedLetters.includes(letter)) {
          return (
            <button onClick={() => {handleClick(letter)}}>
              {letter}
            </button>
          );
        } else {
          return "";
        }
      })}

     
    </React.Fragment>
  )
}

LetterList.propTypes = {
  onLetterClick: PropTypes.func,
  guessedLetters: PropTypes.array,
  countMistakes: PropTypes.func,
}

export default LetterList; 