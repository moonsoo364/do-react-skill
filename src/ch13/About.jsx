import React from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  console.log(query);
  const showDetail = query.detail === 'true';
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습하는 예제입니다.</p>
      {showDetail && <p>detail 값을 true로 설정함</p>}
    </div>
  );
};

About.propTypes = {
  location: PropTypes.object
};

export default About;
