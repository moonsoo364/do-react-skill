import PropTypes from 'prop-types';
import React from 'react';
import '@/ch10/css/TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정관리</div>
      <div className="content">{children}</div>
    </div>
  );
};
TodoTemplate.propTypes = {
  children: PropTypes.string
};

export default TodoTemplate;
