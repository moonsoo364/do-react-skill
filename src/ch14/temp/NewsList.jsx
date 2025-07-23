import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from '@/ch14/components/NewsItem';
import axios from 'node_modules/axios/index';

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

const NewList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => { // 오타: asnyc → async
      setLoading(true);
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.error('뉴스 불러오기 오류:', e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  if (!articles) {
    return null;
  }
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewList;
