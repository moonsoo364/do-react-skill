

# 251028 복습
## state
state는 리액트 내부에서 변경될 수 있는 값을 의미

## 함수형 컴포넌트 useState
리액트 16.8 이후부터 useState라는 함수를 이용하여 state를 사용할 수 있게 되었다.
예제 : `src\ch03\3.4_state\Say.jsx`
# 251029 복습

## useState를 여러 번 사용하기
하나의 useState 함수는 하나의 상태 값만 관리할 수 있다. 컴포넌트에서 관리해야 할 상태가 여러 개라면 useState를 여러번 사용해야 한다. 
예제 : `src\ch08\refeat\251029\useState\info.jsx`

## useEffect
리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 훅
vue2의 `mouned`, `updated` 와 유사한 기능 제공
`useEffect`의 두 번째 인수를 배열로 넣으면 마운트될때 만 첫 번째 인수의 함수가 호출된다.
두 번째 인수에 state를 넣으면 해당 값이 변경될 때를 감지하여 첫 번째 인수의 함수가 호출된다.

```js
usEffect (() =>{},[])
```

아래 `useState`에서 `createBulkTodos`처럼 함수를 파라미터로 전달하면 처음 렌더링할 때 1번 호출
`createBulkTodos()`를 파라미터로 전달하면 리렌더링할 때마다 호출

```js
function createBulkTodos() {
  const array = [];
  for (let i = 0; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false
    });
  }
  return array;
}
  const [todos, setTodos] = useState(createBulkTodos);
```

## state의 값이 변경되었을 때 concat, filter, map, ...을 사용하여 deep copy를 하는 이유

** 레퍼런스가 가르키는 위치가 같을 경우 리 렌더링이 일어나지 않기 때문 ** 

### concat
배열의 insert 동작에 사용

### filter
배열의 delete 동작에 사용

### map
배열 요소를 이용해 계산된 요소를 반환할 때 사용
ex) TodoList 목록에서 완료된 목록을 토글할 때 id로 check 표시를 한다.

## 이벤트 핸들러
 클릭한 후 이벤트를 동작하고 싶으면 화살표 함수를 이용해 콜백 함수를 `onClick`에 바인딩
```js
onClick={() => onToggle(id)}
```

# 251030 복습


## 복습 중인 페이지
p278

## useRef
렌더링에 사용되지 않는 값을 참조할 수 있는 리액트 훅

사용 방법
- input 태그에서 dom을 지정해서 이벤트 혹은 값을 받아올 때

# 251031 복습

## useCallback

리렌더링 시 함수 정의를 캐싱


```js
import { useCallback } from 'react';

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
```

### 매개 변수
`useCallback(fn, dependencies) `
- `fn` : 캐싱할 함수객체
- `dependecies`: `fn` 내에서 참조되는 반응형 값 목록 prop, state, 컴포넌트의 함수와 변수가 포함됨, linter 설정으로 의존성 검증 가능

## 컴포넌트의 리렌더링이 발생하는 경우
1. 자신이 전달받은 props가 변경될 때
2. 자신의 state가 바뀔 때
3. 부모 컴포넌트가 리렌더링될 때
4. forceUpdate 함수가 실행될 때

## 컴포넌트
사용자 인터페이스(HTML)을 재사용하기 위한 API, 기능들이 포함되어 있다.

### render()
컴포넌트가 어떻게 생겼는 지 정의하는 역할을 한다.
`render()` 는 뷰가 어떻게 생겼고 어떻게 작동하는 지에 대한 저옵를 지닌 객체를 반환한다.