import React, { useState, useEffect, useRef } from 'react';

const LifeCycleSample = ({ color }) => {
  const [number, setNumber] = useState(0);
  const [currentColor, setCurrentColor] = useState(color);
  const myRef = useRef(null);

  // getDerivedStateFromProps 역할
  useEffect(() => {
    setCurrentColor(color);
  }, [color]);

  // componentDidMount + componentWillUnmount 역할
  useEffect(() => {
    console.log('componentDidMount');
    return () => {
      console.log('componentWillUnmount');
    };
  }, []);

  // getSnapshotBeforeUpdate + componentDidUpdate 역할
  const prevColorRef = useRef();
  useEffect(() => {
    if (prevColorRef.current && prevColorRef.current !== color) {
      console.log('업데이트되기 직전 색상: ', prevColorRef.current);
    }
    prevColorRef.current = color;
  }, [color]);

  // shouldComponentUpdate 흉내 (마지막 숫자가 4면 렌더링 무효화)
  const prevNumberRef = useRef();
  useEffect(() => {
    if (prevNumberRef.current !== undefined) {
      console.log('shouldComponentUpdate', { color }, { number });
      if (number % 10 === 4) {
        setNumber(prevNumberRef.current); // 이전 값으로 되돌려 렌더링 방지
      }
    }
    prevNumberRef.current = number;
  }, [number]);

  const handleClick = () => {
    setNumber((n) => n + 1);
  };

  console.log('render');

  return (
    <div>
      <h1 style={{ color }} ref={myRef}>
        {number}
      </h1>
      <p>color: {currentColor}</p>
      <button onClick={handleClick}>더하기</button>
    </div>
  );
};

export default LifeCycleSample;
