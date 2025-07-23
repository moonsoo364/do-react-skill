import React from 'react';
import styled from 'styled-components';
import NewsItem from '@/ch14/components/NewsItem';
import axios from 'axios';
import PropTypes from 'prop-types';
import usePromise from '@/ch14/lib/usePromise';
const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`
    );
  }, [category]);
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  if (!response) {
    return null;
  }
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};
NewList.propTypes = {
  category: PropTypes.string
};

export default NewList;
