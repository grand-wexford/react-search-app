export const saveViewedArticle = (articleId: string) => {
  const viewedArticles = getViewedArticles();
  if (!viewedArticles.includes(articleId)) {
    viewedArticles.push(articleId);
    localStorage.setItem('viewedArticles', JSON.stringify(viewedArticles));
  }
};

export const getViewedArticles = (): string[] => {
  const viewedArticles = localStorage.getItem('viewedArticles');
  return viewedArticles ? JSON.parse(viewedArticles) : [];
};

export const isArticleViewed = (articleId: string): boolean => {
  const viewedArticles = getViewedArticles();
  return viewedArticles.includes(articleId);
};