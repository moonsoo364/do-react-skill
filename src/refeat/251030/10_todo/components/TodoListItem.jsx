import Proptypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from 'react-icons/md';
import '@/ch10/css/TodoListItem.scss';

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
        <div className="remove">
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

TodoListItem.propTypes = {
  todo: Proptypes.object
};

export default TodoListItem;
