import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo?.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo?.done ? 'line-through' : 'none' }}>
        {todo?.text}
      </span>
      <button onClick={() => onRemove(todo?.id)}>삭제</button>
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove
}) => {
  const onSubmit = e => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };
  const onChange = e => onChangeInput(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="할 일을 입력하세요"
          value={input}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map(todo => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

Todos.propTypes = {
  input: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onInsert: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};
TodoItem.propTypes = {
  todo: PropTypes.object,
  onToggle: PropTypes.func,
  onRemove: PropTypes.func
};

export default Todos;
