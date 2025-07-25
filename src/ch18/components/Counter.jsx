import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ onIncrease, onDecrease, number }) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => onIncrease()}>+1</button>
      <button onClick={() => onDecrease()}>-1</button>
    </div>
  );
};

Counter.propTypes = {
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
  number: PropTypes.number
};

export default Counter;
