import React, { useCallback } from 'react';
import Todos from '@/ch17/components/Todos';
import { changeInput, insert, toggle, remove } from '@/ch17/modules/todos';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
const TodoContainer = () => {
  const { input, todos } = useSelector(
    ({ todos }) => ({
      input: todos.input,
      todos: todos.todos
    }),
    shallowEqual
  );
  // const input = useSelector(state => state.input);
  // const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const onChangeInput = useCallback(
    input => dispatch(changeInput(input)),
    [dispatch]
  );
  const onInsert = useCallback(todo => dispatch(insert(todo)), [dispatch]);
  const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

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
