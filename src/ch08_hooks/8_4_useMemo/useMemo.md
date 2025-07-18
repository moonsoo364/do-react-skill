# useMemo
useMemo를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있습니다.

## 예제
숫자를 등록할 때뿐만 아리나 인풋 내용이 수정될 때도 `getAverage` 함수가 호출됩니다.
useMemo Hook을 사용하면 이러한 작업을 최적화할 수 있습니다.
```jsx
const getAverage = numbers => {
    console.log('평균값 계산 중..');
    if(!numbers.length) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e => {
        setNumber(e.target.value);
    };

    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }

    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b> {getAverage(list)}
            </div>
        </div>
    )
}

export default Average;

```

## useMemo를 적용한 예제

| 요소                  | 설명                                      |
|-----------------------|-------------------------------------------|
| `getAverage(list)`    | 평균값을 계산하는 함수                     |
| `() => getAverage(list)` | `useMemo`가 캐싱할 계산 함수           |
| `[list]`              | `list`가 바뀔 때만 평균 재계산됨         |

```jsx
import React, {useMemo, useState} from 'react';

const getAverage = numbers => {
    console.log('평균값 계산 중..');
    if(numbers.length===0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e => {
        setNumber(e.target.value);
    };

    const onInsert = () => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }

    const avg = useMemo(() => getAverage(list),[list]);

    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b> {avg}
            </div>
        </div>
    )
}

export default Average;
```

## ✅ useMemo(() => getAverage(list), [list])
이건 올바른 사용법입니다.

- useMemo는 첫 번째 인자로 **"함수"**를 기대합니다.

- () => getAverage(list)는 함수 그 자체입니다. (화살표 함수, 즉 콜백 함수)

- React는 이 콜백을 나중에 실행하고, list가 변경될 때만 다시 실행합니다.

❌ useMemo(getAverage(list), [list])
이건 잘못된 사용법입니다.

- getAverage(list)는 **함수가 아니라 결과값(number)**입니다.

- 이 코드는 getAverage(list)를 즉시 실행하고, 그 결과값을 useMemo에 넘기는 것입니다.

- useMemo는 내부에서 이걸 함수로 처리하려고 시도하지만, 이미 number이기 때문에 에러 혹은 의미 없는 동작이 발생합니다.