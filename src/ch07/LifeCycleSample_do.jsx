import React, { useRef, useState } from 'react';
const LifeCycle = () => {
  const [number, setNumber] = useState(0);
  const [currentColor, setCurrentColor] = useState(color);
  const myRef = useRef(null);

  // getDerivedStateFromProps
  useEffect(() => {
    setCurrentColor(color);
  }, [color]);

  // componentDidMount
  useEffect(() => {
    console.log('componentDidMount');
    return () => {
      console.log('componentWillUnmount');
    }
  }, []);
  // componentDidUpdate + getSnapshotBeforeUpdate
  const prevColorRef = useRef();
  useEffect(() => {
    if(prevColorRef.current && prevColorRef.current !== color){
      console.log('업데이트 되기 전 색상: ', prevColorRef.current);
      
    }
  })
}