import React, { useCallback, useState } from 'react';
import NewList from '@/ch14/components/NewsList';
import Categories from '@/ch14/components/Categories';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewList category={category} />
    </>
  );
};

export default App;
