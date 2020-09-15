import React from 'react';
import HangmanImage from './HangmanImage';
import Word from './Word';
import LetterList from './LetterList';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import {randomWord} from './WordList';

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      gameWord: randomWord(),
      wrongLetters: 0,
      guessedLetters: [],
      image: 0,
     }
  }

//  handleRandomWord(){
//   const { dispatch } = this.props;
//   const action = {
//     type: "GAME_WORD"
//   }
//   dispatch(action);
//  }

handleGuessedWord(){
  return this.state.gameWord.split("").map(letter => (this.state.guessedLetters.has(letter) ? letter : " _ "))
}

  render() { 
    return (
      <React.Fragment>
        <h1>Game control</h1>
        <HangmanImage />
        <Word gameWord={this.props.gameWord} />
        <LetterList  />
      </React.Fragment>
     );
  }
}

GameControl.propTypes = {
  gameWord: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    gameWord: state
  }
}

GameControl = connect(mapStateToProps)(GameControl);
 
export default GameControl;