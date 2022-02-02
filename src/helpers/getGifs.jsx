export const getApiGiff = async (categories) => {
  const API_KEY = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    categories
  )}&limit=10&api_key=ASxeLKEZUeJw26eiyNBkn0yPkayoTIS8`;
  const resp = await fetch(API_KEY);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
