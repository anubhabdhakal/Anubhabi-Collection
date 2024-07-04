const getImageURL = (url: string) => {
  return `${import.meta.env.VITE_BACKEND_HOST_URL}${url}`;
};

export default getImageURL;
