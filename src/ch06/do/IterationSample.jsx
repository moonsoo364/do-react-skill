import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    {
      id: 1,
      text: '눈사람'
    },
    {
      id: 2,
      text: '얼음'
    },
    {
      id: 3,
      text: '눈'
    },
    {
      id: 4,
      text: '바람'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    // concat 새로운 배열을 만들어 반환
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };
  const onRemove = id => {
    //filter 조건에 맞는 새로운 배열 반환
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  };
  /**
   * 리액트에서 불변성을 유지하는 이유
   * 1. 리액트에서 상태 변경을 감지하려면 새로운 참조가 필요함
   * 2. 원본을 직접 수정하면 리렌더링이 일어나지 않거나, 예측하기 힘든 버그가 생길 수 있음
   */
  const namesList = names.map(name => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
