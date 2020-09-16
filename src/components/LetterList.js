import React from 'react';
import PropTypes from 'prop-types';


function LetterList(props){

  const allLetterList = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


  return(
    <React.Fragment>
      {allLetterList.map(letter => 
        <button onClick={() => props.onLetterClick(letter)}> {letter}</button>
      )}
    </React.Fragment>
  )
}

LetterList.propTypes = {
  onLetterClick: PropTypes.func
}

export default LetterList; 