import React from 'react';
import PropTypes from 'prop-types';
import hman0 from '../img/hman0.png'
import hman1 from '../img/hman1.png'
import hman2 from '../img/hman2.png'
import hman3 from '../img/hman3.png'
import hman4 from '../img/hman4.png'
import hman5 from '../img/hman5.png'
import hman6 from '../img/hman6.png'
import hman7 from '../img/hman7.png'

const images = [hman0,hman1,hman2,hman3,hman4,hman5,hman6,hman7];


function HangmanImage(props){

  const imageStyles = {
    height: '350px',
    width: 'auto'
  };
  return(
    <img style={imageStyles} src={images[props.mistakes]}></img>
  )
};

HangmanImage.propTypes ={
  mistakes: PropTypes.number
}

export default HangmanImage; 