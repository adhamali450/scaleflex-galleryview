const url =
  "https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy";

const fetchImages = async () => {
  const response = await fetch(url),
    data = await response.json();

  return data;
};

export default fetchImages;
