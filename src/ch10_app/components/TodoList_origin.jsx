import PropTypes from 'prop-types';
import React from 'react';
import TodoListItem from '@/ch10_app/components/TodoListItem';
import '@/ch10_app/css/TodoList.scss';

const TodoList = ({ todos = [], onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;
