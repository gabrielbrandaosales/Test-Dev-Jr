export const API_URL = 'http://127.0.0.1:3001';

export const GET_PRODUCT = () => {
  return {
    url: API_URL + '/product',
    options: {
      method: 'GET',
    },
  };
};

export const GET_PRODUCT_ID = (id) => {
  return {
    url: `API_URL/${product}/${id}`,
    options: {
      method: 'GET',
    },
  };
};

export const GET_SEARCH = (search) => {
  return {
    url: `${API_URL}/product/search?q=${search}`,
    options: {
      method: 'GET',
    },
  };
};
