import React from 'react';
import PropTypes from 'prop-types';

function ResetButton(props) {
  return (
    <button onClick ={() => { props.onResetClick()}}>Reset Game</button>
  )
};

ResetButton.propTypes = {
  onResetClick: PropTypes.func
}

export default ResetButton;