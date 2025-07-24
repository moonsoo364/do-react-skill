import React from 'react';
import PropTypes from 'prop-types';
const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  number: PropTypes.number,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func
};

export default Counter;
