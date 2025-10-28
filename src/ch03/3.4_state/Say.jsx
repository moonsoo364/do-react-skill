import { useState } from 'react';
import React from 'react';
const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('Hello');
  const onClickLeave = () => setMessage('Buy');

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
    </div>
  );
};

export default Say;
