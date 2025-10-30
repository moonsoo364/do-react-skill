import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import TodoListItem from '@/refeat/251030/10_todo/components/TodoListItem';
import '@/ch10/css/TodoList.scss';

const TodoList = ({ todos }) => {
  // useEffect(() => {
  //   console.log(todos);
  // }, []);
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TodoList;
