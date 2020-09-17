import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ResetButton(props) {
  return (
    <Button variant="outline-info" onClick ={() => { props.onResetClick()}}>Reset Game</Button>
  )
};

ResetButton.propTypes = {
  onResetClick: PropTypes.func
}

export default ResetButton;