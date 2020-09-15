import React from 'react';

function LetterList(){

  const allLetterList = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


  return(
    <React.Fragment>
      <p>LetterList</p>
      {/* {allLetterList.map(letter =>{
        <button onClick={this.handleLetterClick}> {letter}</button>
      })} */}
    </React.Fragment>
  )
}

export default LetterList; 