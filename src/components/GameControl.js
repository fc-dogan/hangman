import React from 'react';
import HangmanImage from './HangmanImage';
import Word from './Word';
import LetterList from './LetterList';

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <React.Fragment>
        <h1>Game control</h1>
        <HangmanImage />
        <Word />
        <LetterList />
      </React.Fragment>
     );
  }
}
 
export default GameControl;