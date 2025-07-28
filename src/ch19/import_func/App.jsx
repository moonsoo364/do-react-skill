import React from 'react';
import logo from '@/assets/react.svg';

const App = () => {
  const onClick = () => {
    import('@/ch19/import_func/notify').then(result => result.default());
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello World</p>
      </header>
    </div>
  );
};

export default App;
