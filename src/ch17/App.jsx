import React from 'react';
import CounterContainer from '@/ch17/containers/CounterContainer';
import TodoContainer from '@/ch17/containers/TodoContainer';
const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodoContainer />
    </div>
  );
};

export default App;
