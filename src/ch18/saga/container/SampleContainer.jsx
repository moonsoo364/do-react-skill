import React from 'react';
import { getPost, getUsers } from '@/ch18/thunk/modules/sample';
import Sample from '../components/sample';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const { useEffect } = React;
const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers
}) => {
  useEffect(() => {
    getPost(1);
    getUsers(1);
  }, [getPost, getUsers]);
  // const fn = async () => {
  //   try {
  //     await getPost(1);
  //     await getUsers(1);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // fn();
  return (
    <Sample
      Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

SampleContainer.propTypes = {
  getPost: PropTypes.func,
  getUsers: PropTypes.func,
  loadingPost: PropTypes.bool,
  loadingUsers: PropTypes.bool,
  post: PropTypes.object,
  users: PropTypes.arrayOf(PropTypes.object)
};

export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading['sample/GET_POST'],
    loadingUsers: loading['sample/GET_USERS']
  }),
  {
    getPost,
    getUsers
  }
)(SampleContainer);
