import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import ArticleCard from '../components/ArticleCard';
import { fetchArticles } from '../services/api';
import { getViewedArticles, saveViewedArticle } from '../utils/localStorage';
import { Article } from '../types';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocale, setSelectedLocale] = useState('');
  const [error, setError] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [viewedArticles, setViewedArticles] = useState<string[]>([]);

  useEffect(() => {
    const viewed = getViewedArticles();
    setViewedArticles(viewed);
  }, []);

  const handleSearch = async () => {
    const results = await fetchArticles(selectedCategory, selectedLocale, searchQuery);

    console.log("results", results);
    if (results.success) {
      setArticles(results.data);
    } else {
      setError(results.message || '');
    }
  };

  const handleArticleClick = (articleId: string, articleUrl: string) => {
    saveViewedArticle(articleId);
    setViewedArticles((prev) => [...prev, articleId]);
    window.open(articleUrl, '_blank');
  };

  const handleFilterChange = (category: string, locale: string) => {
    setSelectedCategory(category);
    setSelectedLocale(locale);
  };
  console.log(articles);
  return (
    <div>
      <h1>Поиск по базе знаний</h1>
      <SearchBar onSearch={handleSearch} setSearchQuery={setSearchQuery} />
      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedLocale={selectedLocale}
        setSelectedLocale={setSelectedLocale}
        onFilterChange={handleFilterChange} // Add this line
      />

      {error ? <div style={{ color: 'red', fontWeight: 'bold' }}>{error}</div> :
        <div className="article-list">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              isViewed={viewedArticles.includes(article.id)}
              onClick={() => handleArticleClick(article.id, article.public_urls.ru)}
            />
          ))}
        </div>}
    </div>
  );
};

export default HomePage;