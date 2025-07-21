import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import '@/ch10_app/css/TodoInsert.scss';

const TodeInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        value={value}
        onChange={onChange}
        name="todo"
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

TodeInsert.propTypes = {
  onInsert: PropTypes.func.isRequired
};

export default TodeInsert;
