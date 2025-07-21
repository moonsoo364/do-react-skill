/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
const HistorySample = () => {
  const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  //   const handleBeforeUnload = e => {
  //     e.preventDefault();
  //     e.returnValue = '';
  //   };

  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   const unblock = () => {
  //     const confirmLeave = window.confirm('정말 떠나실 건가요?');
  //     if (!confirmLeave) {
  //       navigate(location.pathname, { replace: true });
  //     }
  //   };

  //   window.addEventListener('popstate', unblock);
  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //     window.removeEventListener('popstate', unblock);
  //   };
  // }, [navigate, location]);

  return (
    <div>
      <button onClick={() => navigate(-1)}>뒤로</button>
      <button onClick={() => navigate('/')}>홈으로</button>
    </div>
  );
};

export default HistorySample;
