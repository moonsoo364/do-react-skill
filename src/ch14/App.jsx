import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewsPage from '@/ch14/pages/NewsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/:category?" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
