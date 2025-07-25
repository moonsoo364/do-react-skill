# useCallback
`useCallback`은 렌더링 성능을 최적화해야 하는 상황에서 사용합니다.
이 Hook을 사용하면 만들어 놨던 함수를 재사용할 수 있습니다.


## 예제
`useCallback`의 첫번째 파라미터는 생성하고 싶은 함수를 넣고, 두 번째 파라미터에는 배열을 넣으면 됩니다.
이 배열에는 어떤 값이 변경되었을 때 함수를 새로 생성해야하는 지 명시합니다.
```jsx
    const onInsert = useCallback(()=>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    },[list,number]);//number 혹은 list가 바뀌었을 때 호출
```