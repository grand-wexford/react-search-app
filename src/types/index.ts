export interface Article {
  id: string;
  title: string;
  body: string;
  highlight: {
    title: string;
    body: string;
  };
  public_urls: {
    [key: string]: string;
  };
}

export interface Category {
  id: string;
  name: string;
}

export interface Locale {
  code: string;
  name: string;
}