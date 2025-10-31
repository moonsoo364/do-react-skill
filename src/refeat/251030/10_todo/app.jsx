import React, { useCallback, useRef, useState } from 'react';
import '@/refeat/251030/10_todo/css/index.css';
import TodoTemplate from '@/refeat/251030/10_todo/components/TodoTemplate';
import TodoInsert from '@/refeat/251030/10_todo/components/TodoInsert';
import TodoList from '@/refeat/251030/10_todo/components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해보기',
      checked: true
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false
    }
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };
      setTodos(todos.concat(todo));
    },
    [todos]
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
