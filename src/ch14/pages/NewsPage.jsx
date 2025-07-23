import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '@/ch14/components/Categories';
import NewsList from '@/ch14/components/NewsList';

const NewsPage = () => {
  const { category } = useParams();
  const selectedCategory = category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={selectedCategory} />
    </>
  );
};

export default NewsPage;
