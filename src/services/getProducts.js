import axios from 'axios';

export const getProducts = async (params) => {
  try {
    const res = await axios.get('https://e-commerce-api.academlo.tech/api/v1/products', {
      params: { category: params?.category, query: params?.query },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
