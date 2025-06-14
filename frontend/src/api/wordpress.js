import axios from 'axios';

const WP_API_URL = process.env.REACT_APP_WP_API_URL; // Ler do .env

export const getNews = async () => {
  try {
    const response = await axios.get(`${WP_API_URL}/custom/v1/news`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return [];
  }
};

export const getModels = async (marca) => {
    try {
      const response = await axios.get(`${WP_API_URL}/custom/v1/models?marca=${marca}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar modelos:", error);
      return [];
    }
  };

export const getModelDetails = async (id) => {
    try {
      const response = await axios.get(`${WP_API_URL}/custom/v1/models/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar detalhes do modelo:", error);
      return null;
    }
  };