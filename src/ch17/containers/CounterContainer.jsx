import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '@/ch17/components/Counter';
import PropTypes from 'prop-types';
import { increase, decrease } from '@/ch17/modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

CounterContainer.propTypes = {
  number: PropTypes.number,
  increase: PropTypes.func,
  decrease: PropTypes.func
};

//객체로 전달해주면 내부적으로 bindActionCreations 작업 실행
export default connect(
  state => ({
    number: state.counter.number
  }),
  {
    increase,
    decrease
  }
)(CounterContainer);
// export default connect(
//   state => ({
//     number: state.counter.number
//   }),
//   dispatch =>
//     bindActionCreators(
//       {
//         increase,
//         decrease
//       },
//       dispatch
//     )
// )(CounterContainer);
