import { baseURL, httpRequest } from '.';

const getFeed = async (start: number) => {
  return httpRequest(
    fetch(`${baseURL}/feed?start=${start}&pageSize=${start + 5}`)
  );
};

export { getFeed };
