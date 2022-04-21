const axios = require("axios").default;

export const url =
  "https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy";

const cacheName = "v1";

export const fetch = async (url) => await axios.get(url);

export const cache = async (resource) => {
  const cache = await caches.open(cacheName);
  console.log(`Caching: ${resource}`);
  cache.add(resource);
};

export const fetchChached = async (resource) => {
  console.log(`Fetching: ${resource}`);

  const result = await caches.match(resource);

  // If found in cache: return
  if (result) {
    console.log(result);
    return result;
  }

  // If not found in cache: fetch and cache and return.
  const response = await fetch(resource);
  await cache(response.config.url);

  console.log(response);
  return response;
};
