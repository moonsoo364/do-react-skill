import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@/ch16/store/counterSlice';

const App = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAllign: 'center', padding: '2rem' }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  );
};

export default App;
