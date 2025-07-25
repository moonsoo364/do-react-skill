import React from 'react';
import { connect } from 'react-redux';
import { increaseAsync, decreaseAsync } from '@/ch18/modules/counter';
import Counter from '@/ch18/components/Counter';
import PropTypes from 'prop-types';

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

CounterContainer.propTypes = {
  increase: PropTypes.func,
  decrease: PropTypes.func,
  increaseAsync: PropTypes.func,
  decreaseAsync: PropTypes.func,
  number: PropTypes.number
};

export default connect(
  state => ({
    number: state.counter
  }),
  {
    increaseAsync,
    decreaseAsync
  }
)(CounterContainer);
