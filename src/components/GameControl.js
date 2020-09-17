import React from 'react';
import HangmanImage from './HangmanImage';
import Word from './Word';
import LetterList from './LetterList';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions/ActionTypes';
import ResetButton from './ResetButton';

class GameControl extends React.Component {
  constructor(props) {
    super(props);
   
  }

  

  componentDidMount() {
    const { dispatch } = this.props;
    const action = { type: a.GAME_WORD };
    dispatch(action);
  }

  handleLetterClick =  (letter) => {
    const { dispatch } = this.props;
      if(this.props.wrongLetters > 4 ){
          const action2 = {type: a.LOSE_GAME}
          dispatch(action2);
      } else if(this.checkForWin() ){
        const action = {type: a.WIN_GAME}
            dispatch(action);
      }else {
        const action = { type: a.ADD_LETTER, letter: letter };
        dispatch(action);
      }

  };

  checkForWin = () => {
    const mainLetters = this.props.gameWord.split('');
    const tempArr = mainLetters.filter((letter) => this.props.guessedLetters.includes(letter));

    if (tempArr.sort().join('') === mainLetters.sort().join('')) {
      return true;
    } else {
      return false;
    }
  };

  handleIncrementingWrongLetters = (letter) => {
    const { dispatch } = this.props;
    if (!this.props.gameWord.split('').includes(letter)) {
      const action = { type: a.WRONG_LETTER };
      dispatch(action);
    }
  };


handleLetterGuess = (letter) => { 
 const { dispatch } = this.props;
 const action = { type: a.ADD_LETTER, letter: letter };
 dispatch(action);
}

handleResetTheGame = () => {
  const { dispatch } = this.props;
  const action4 = { type:a.GAME_WORD };
  dispatch(action4);
  const action1 = { type:a.RESET_COUNT};
  dispatch(action1);
  const action2 = { type:a.RESET_GAME};
  dispatch(action2);
  const action3 = { type:a.RESET_LETTERS};
  dispatch(action3);
};


  render() { 
    const gameStatus = (this.props.winGame) ? "You Won!" : "You Lost"
    let currentlyVisibleState = null;
    if(this.props.winGame === null){
      currentlyVisibleState =  <LetterList 
      onLetterClick={this.handleLetterClick} 
      guessedLetters={this.props.guessedLetters}
      countMistakes={this.handleIncrementingWrongLetters}/>;
    } else {
      currentlyVisibleState = <h2>{gameStatus}</h2>;
    }
    return (
      <React.Fragment>
        <HangmanImage />
        <Word word={this.props.gameWord} guessedLetters={this.props.guessedLetters}/>
        <h3>mistake: {this.props.wrongLetters}</h3>
        {currentlyVisibleState}
        <br/>
        <ResetButton onResetClick={this.handleResetTheGame}/>
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