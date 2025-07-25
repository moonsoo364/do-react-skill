import React from 'react';
import Todos from '@/ch17/components/Todos';
import { changeInput, insert, toggle, remove } from '@/ch17/modules/todos';
import { useSelector, shallowEqual } from 'react-redux';
import useActions from '@/ch17/lib/useActions';
const TodoContainer = () => {
  const { input, todos } = useSelector(
    ({ todos }) => ({
      input: todos.input,
      todos: todos.todos
    }),
    shallowEqual
  );
  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
  );

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};
export default TodoContainer;
