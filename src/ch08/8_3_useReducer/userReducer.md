# useReducer
`useReducer`는 useState보다 더 더양한 컴포넌트 상황에 따라 다양한 상태를 다른값을 업데이트해 주고 싶을 때 사용하는 Hook입니다.
리듀서는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션값을 전달받아 새로운 상태를 반환하는 함수입니다.

userReducer의 첫번째 파라미터에는 리듀서 함수를 넣고 두 번째 파라미터에는 해당 리듀서의 기본값을 넣어줍니다.
```jsx
function reducer(state, action){
    // action.type에 따라 다른 작업을 수행
    switch (action.type){
        case 'INCREMENT':
            return { value: state.value + 1};
        case 'DECREMENT':
            return { value: state.value + 1};
        default:
            return state;
    }
}
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});
    return (
     <div>
        <p>
            현재 카운터 값은 <b>{state.value}</b>입니다.
        </p>
        <button onClick={()=> dispatch({ type: 'INCREMENT'})}>+1</button>
        <button onClick={()=> dispatch({ type: 'DECREMENT'})}>-1</button>
     </div>   
    );
};
```