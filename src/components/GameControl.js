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
      guessedLetters: new Set([]),
      image: 0,
      winGame: null
     }
  }

//  handleRandomWord(){
//   const { dispatch } = this.props;
//   const action = {
//     type: "GAME_WORD"
//   }
//   dispatch(action);
//  }

handleGuessedWord() {
  return this.state.gameWord.split("").map(letter => 
    (this.state.guessedLetters.has(letter) ? letter : " _ "))
}

handleLetterGuess = (letter) => {
  this.setState({
    guessedLetters: this.state.guessedLetters.add(letter),
    wrongLetters: this.state.wrongLetters + (this.state.gameWord.includes(letter) ? 0 : 1)
  });
}

resetGame = () => {
  this.setState({
    wrongLetters: 0,
    guessedLetters: [],
    gameWord: randomWord()
  });
}

  render() { 
    const gameOver = this.state.wrongLetters > 6;
    return (
      <React.Fragment>
        <HangmanImage />
        <p> {!gameOver ? this.handleGuessedWord() : this.state.gameWord} </p>
        {/* <Word gameWord={this.props.gameWord} /> */}
        <LetterList  onLetterClick={this.handleLetterGuess}/>
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