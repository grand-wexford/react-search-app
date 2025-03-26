import axios from 'axios';

const API_BASE_URL = 'api'; // Replace with your actual API base URL

export const fetchArticles = async (category: string, locale: string, search: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search/articles`, {
      params: {
        category,
        locale,
        search,
      },
    });
    return { success: true, data: response.data.results };
  } catch (error) {
    return { success: false, message: error instanceof Error ? error.message : 'An unknown error occurred' };
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error instanceof Error ? error.message : 'An unknown error occurred' };
  }
};

export const fetchLocales = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/instance`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error instanceof Error ? error.message : 'An unknown error occurred' };
  }
};
