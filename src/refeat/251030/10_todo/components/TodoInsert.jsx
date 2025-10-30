import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import '@/ch10/css/TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);
  const onSumbit = useCallback(e => {
    e.preventDefault();
    console.log('# onSubmit');
    onInsert(value);
    setValue('');
  }, []);
  return (
    <form className="TodoInsert" onSubmit={onSumbit}>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};
TodoInsert.propTypes = {
  onInsert: PropTypes.func.isRequired
};

export default TodoInsert;
