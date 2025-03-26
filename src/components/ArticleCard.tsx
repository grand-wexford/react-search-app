import React from 'react';
import { saveViewedArticle } from '../utils/localStorage';

interface ArticleCardProps {
  isViewed: boolean;
  article: {
    id: string;
    highlight: {
      title: string;
      body: string;
    };
    public_urls: {
      [key: string]: string;
    };
  };

  onClick: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, isViewed, onClick }) => {

  let { highlight } = article;

  return (
    <div className={`article-card ${isViewed ? 'viewed' : ''}`} onClick={onClick}>
      {isViewed && <span className="isViewed-icon">👁️</span>}
      <h3>{highlight.title}</h3>
      <p>{highlight.body}</p>
    </div>
  );
};

export default ArticleCard;