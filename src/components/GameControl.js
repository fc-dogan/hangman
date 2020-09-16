import React from 'react';
import HangmanImage from './HangmanImage';
import Word from './Word';
import LetterList from './LetterList';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
// import {randomWord} from './WordList';
import * as a from './../actions/ActionTypes';

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      // gameWord: randomWord(),
      // wrongLetters: 0,
      // guessedLetters: new Set([]),
      // image: 0,
      // winGame: null
     }
  }

  

  startGame() {
    const { dispatch } = this.props;
    const action = { type: a.GAME_WORD };
    dispatch(action);
  }

  handleLetterClick =  (letter) => {
    const { dispatch } = this.props;
    const action = { type: a.ADD_LETTER, letter: letter };
    dispatch(action);
  };






// handleGuessedWord() {
//   return this.state.gameWord.split("").map(letter => 
//     (this.state.guessedLetters.has(letter) ? letter : " _ "))
// }

handleLetterGuess = (letter) => { 
 const { dispatch } = this.props;
 const action = { type: a.ADD_LETTER, letter: letter };
 dispatch(action);
}

// resetGame = () => {
//   this.setState({
//     wrongLetters: 0,
//     guessedLetters: [],
//     gameWord: randomWord()
//   });
// }

  render() { 
    const gameOver = this.state.wrongLetters > 6;
    return (
      <React.Fragment>
        <HangmanImage />
        {this.startGame()}
        <Word word={this.props.gameWord} guessedLetters={this.props.guessedLetters}/>
       <h3>mistake: {this.props.wrongLetters}</h3>
        <LetterList  
        onLetterClick={this.handleLetterClick} 
        guessedLetters={this.props.guessedLetters}/>
      </React.Fragment>
     );
  }
}

GameControl.propTypes = {
  gameWord: PropTypes.string,
  wrongLetters: PropTypes.number,
  guessedLetters: PropTypes.array,
  winGame: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    gameWord: state.gameWord,
    wrongLetters: state.wrongLetters,
    guessedLetters: state.guessedLetters,
    winGame: state.winGame
  }
};

GameControl = connect(mapStateToProps)(GameControl);
 
export default GameControl;