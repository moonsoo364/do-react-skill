import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from '@/ch10_app/components/TodoTemplate';
import TodeInsert from '@/ch10_app/components/TodoInsert';
import TodoList from '@/ch10_app/components/TodoList';
function createBulkTodos() {
  const array = [];
  for (let i = 0; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return array;
}
const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(4);
  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current++;
  }, []);
  const onRemove = useCallback(id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }, []);

  const onToggle = useCallback(id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);
  return (
    <TodoTemplate>
      <TodeInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
