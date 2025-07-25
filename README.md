# [리액트를 다루는 기술 실습](https://product.kyobobook.co.kr/detail/S000001792882)
도서 내용 실습 Repository 개념 설명은 하위 디렉터리 .md 파일에 작성

# 계획
## 250718 ~ 250720
아래 챕터 독서 및 코드 실습
- ~~ch08 Hooks~~  
- ~~ch09 컴포넌트 스타일링~~  
- ~~ch11 컴포넌트 성능 최적화~~  

## 250721 ~ 250725
- ch12 immer  
- ch13 react-router  
- ch13 외부 api  

# 메모
## ch 17 redux
### `bindActionCreators` 란
`bindActionCreators`함수는 action creator를 `dispatch와 자동으로 연결하는 함수입니다.
``` jsx
function increase() {
  return { type: 'INCREASE' };
}

dispatch(increase()); // 직접 호출

const bound = bindActionCreators(increase, dispatch);
bound(); // 내부적으로 dispatch(increase()) 호출됨
```

즉 `increase()` 그냥 호출하면 `dispatch()`까지 되게 만드는 `dispatch`로 래핑된 함수를 반환한다.

### `connect` vs `useSelector`
컨테이너 컴포넌트를 만들 때 `connect` 함수 혹은 `useSelector`,`useDispatch`를 사용할 수 있다.
`connect` 함수를 사용할 경우 컴포넌트의 props가 바뀌지 않았다면 리렌더링이 자동으로 방지되어 성능에 최적화된다. `useSelector`를 사용할 경우에는 자동으로 이뤄지지 않으므로 React.memo 컴포넌트를 사용해야 한다.