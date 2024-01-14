import { baseURL, httpRequest } from '.';

const getComments = async (id: number) => {
  httpRequest(fetch(`${baseURL}/comments/${id}`));
};

export { getComments };
