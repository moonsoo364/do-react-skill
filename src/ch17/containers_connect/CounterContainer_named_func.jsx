import React from 'react';
import { connect } from 'react-redux';
import Counter from '@/ch17/components/Counter';
import PropTypes from 'prop-types';
import { increase, decrease } from '@/ch17/modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};
const mapStateToProps = state => ({
  number: state.counter.number
});
const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(increase()),
  decrease: () => dispatch(decrease())
});
CounterContainer.propTypes = {
  number: PropTypes.number,
  increase: PropTypes.func,
  decrease: PropTypes.func
};
//Higher-Order Component 패턴 아래 코드와 같음
/**const withRedux = connect(mapStateToProps, mapDispatchToProps);
const ConnectedComponent = withRedux(CounterContainer);
export default ConnectedComponent; */
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
