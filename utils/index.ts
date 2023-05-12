export const objectToUrlParams = (obj: object) => {
  const params = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const encodedKey = encodeURIComponent(key);
      const encodedValue = encodeURIComponent(value);
      params.push(`${encodedKey}=${encodedValue}`);
    }
  }

  return params.join('&');
};
