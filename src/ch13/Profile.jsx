import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import WithRouterSample from '@/ch13/WithRouterSample';
const data = {
  velopert: {
    name: '김민준',
    description: '리액트 개발자'
  },
  gildong: {
    name: '홍길동',
    description: '홍길동전의 주인공'
  }
};

const Profile = () => {
  const { username } = useParams();
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사람입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

Profile.propTypes = {
  match: PropTypes.object
};

export default Profile;
