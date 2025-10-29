import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import TodoListItem from '@/ch10/components/TodoListItem';
import '@/ch10/css/TodoList.scss';
import { List } from 'react-virtualized';

const TodoList = ({ todos = [], onRemove, onToggle }) => {
  const rowRederer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos]
  );

  return (
    <List
      className="TodoList"
      width={512} // 전체 크기
      height={513} // 전체 높이
      rowCount={todos.length} // 항목 개수
      rowHeight={57} // 항목 높이
      rowRenderer={rowRederer} // 항목을 렌더링할 때 쓰는 함수
      list={todos} // 배열
      style={{ outline: 'none' }} // 리스트 기본 스타일 제거
    />
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default TodoList;
