import React, { useEffect, useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log('redered');
  }, []);
  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChagneNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChagneNickname} />
      </div>
      <div>
        <b>이름 : </b> {name}
      </div>
      <div>
        <b>닉네임 : </b> {nickname}
      </div>
    </div>
  );
};

export default Info;