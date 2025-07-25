import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '@/ch17/components/Counter';
import { increase, decrease } from '@/ch17/modules/counter';

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();

  // 예시 1: useCallback 없이 (매번 새로 만들어짐)
  // const onIncrease = () => dispatch(increase());
  // const onDecrease = () => dispatch(decrease());

  // 예시 2: useCallback으로 고정
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  const prevRef = useRef({});

  useEffect(() => {
    const prev = prevRef.current;
    if (prev.onIncrease) {
      console.log('onIncrease 동일한가?', prev.onIncrease === onIncrease);
      console.log('onDecrease 동일한가?', prev.onDecrease === onDecrease);
    }
    prevRef.current = { onIncrease, onDecrease };
  });

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
