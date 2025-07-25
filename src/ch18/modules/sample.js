import * as api from '@/ch18/lib/api';
import { handleActions } from 'redux-actions';
import createRequestThunk from '@/ch18/lib/createRequestThunk';
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USER_SUCCESS = 'sample/GET_USERS_SUCCESS';

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

const initialState = {
  post: null,
  users: null
};
const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false
      },
      post: action.payload
    }),
    [GET_USER_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false
      },
      users: action.payload
    })
  },
  initialState
);

export default sample;
