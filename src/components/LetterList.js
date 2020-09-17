import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function LetterList(props){

  const allLetterList = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  const handleClick =(letter) =>{
    props.onLetterClick(letter);
    props.countMistakes(letter);
  }

const buttonStyle ={
  margin: "2px",
}
  return(
    <React.Fragment>
      {allLetterList.map(letter => {
        if (!props.guessedLetters.includes(letter)) {
          return (
            <Button style={buttonStyle} variant="outline-secondary" onClick={() => {handleClick(letter)}}>
              {letter}
            </Button>
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