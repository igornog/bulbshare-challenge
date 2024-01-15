const baseURL = process.env.REACT_APP_BASE_URL;

const httpRequest = async (request: any) => {
  try {
    const response = await request;
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export { httpRequest, baseURL };
