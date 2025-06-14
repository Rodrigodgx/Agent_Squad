import React, { useState, useEffect } from 'react';
import { getNews } from '../api/wordpress';

function HomePage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews();
      setNews(data);
    };
    fetchNews();
  }, []);

  return (
    <div>
      <h1>Últimas Notícias</h1>
      {news.map(item => (
        <div key={item.title}>
          <h2><a href={item.link}>{item.title}</a></h2>
          <p>{item.content.substring(0, 200)}...</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;