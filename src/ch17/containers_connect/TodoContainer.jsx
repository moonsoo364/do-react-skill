import React from 'react';
import { connect } from 'react-redux';
import Todos from '@/ch17/components/Todos';
import { changeInput, insert, toggle, remove } from '@/ch17/modules/todos';
import PropTypes from 'prop-types';

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

TodosContainer.propTypes = {
  input: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeInput: PropTypes.func.isRequired,
  insert: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

export default connect(
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos
  }),
  {
    changeInput,
    insert,
    toggle,
    remove
  }
)(TodosContainer);
