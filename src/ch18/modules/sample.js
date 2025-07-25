import * as api from '@/ch18/lib/api';
import { handleActions } from 'redux-actions';
import createRequestThunk from '@/ch18/lib/createRequestThunk';
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USER_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USER_FAILURE = 'sample/GET_USERS_FAIL';
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// export const getPost = id => async dispatch => {
//   dispatch({ type: GET_POST });
//   try {
//     const res = await api.getPost(id);
//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: res.data
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: e.data
//     });
//     throw e;
//   }
// };

// export const getUsers = () => async dispatch => {
//   dispatch({ type: GET_USERS });
//   try {
//     const res = await api.getUsers();
//     dispatch({
//       type: GET_USER_SUCCESS,
//       payload: res.data
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_USER_FAILURE,
//       payload: e.data
//     });
//     throw e;
//   }
// };

const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false
  },
  post: null,
  users: null
};
const sample = handleActions(
  {
    [GET_POST]: state => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: true
      }
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false
      },
      post: action.payload
    }),
    [GET_POST_FAILURE]: state => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false
      }
    }),
    [GET_USERS]: state => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: true
      }
    }),
    [GET_USER_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false
      },
      users: action.payload
    }),
    [GET_USER_FAILURE]: state => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false
      }
    })
  },
  initialState
);

export default sample;
