import { baseURL, httpRequest } from '.';

const getComments = async (briefRef: string) => {
  return httpRequest(fetch(`${baseURL}/comments?briefRef=${briefRef}`));
};

export { getComments };
