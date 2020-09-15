import React from 'react';
import PropTypes from "prop-types";

function Word(props){
  const { word } = props;

  function handleSplitGameWord(props){
    props.gameWord.split("").map(letter => {
      return letter;
    })
  }

  return (
    <React.Fragment>
      {handleSplitGameWord}
    </React.Fragment>
    
  )
}

Word.propTypes ={
  gameWord: PropTypes.string
}

export default Word;
