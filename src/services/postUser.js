import axios from 'axios';

export const postUser = async (userData) => {
  console.log(userData);
  try {
    const res = await axios.post(
      `https://e-commerce-api.academlo.tech/api/v1/users/${userData}`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
