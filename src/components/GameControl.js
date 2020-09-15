import React from 'react';
import HangmanImage from './HangmanImage';
import Word from './Word';
import LetterList from './LetterList';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      // gameWord: "",
      wrongLetters: 0,
      guessedLetters: [],
      image: 0,
     }
  }

  // handleGuessedWord(){
  //   return this.props.
  // }


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