import React from 'react';
import { useSelector } from 'react-redux';
import { increment, decrement } from '@/ch16/store/counterSlice';
import useActions from '@/ch16/lib/useActions';
const App = () => {
  const count = useSelector(state => state.counter.value);
  // const dispatch = useDispatch();
  const [onIncrease, onDecrease] = useActions([increment, decrement], []);
  // const onIncrease = useCallback(() => dispatch(increment()), [dispatch]);
  // const onDecrease = useCallback(() => dispatch(decrement()), [dispatch]);

  return (
    <div style={{ textAllign: 'center', padding: '2rem' }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      {/* <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button> */}
    </div>
  );
};

export default App;
