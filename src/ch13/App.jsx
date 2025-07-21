import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from '@/ch13/About';
import Home from '@/ch13/Home';
import Profiles from '@/ch13/Profiles';

const App = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">velopert 프로필</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/*" element={<Profiles />} />
      </Routes>
    </>
  );
};

export default App;
