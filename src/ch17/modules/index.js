import { combineReducers } from 'redux';
import counter from '@/ch17/modules/counter';
import todos from '@/ch17/modules/todos';

const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;
