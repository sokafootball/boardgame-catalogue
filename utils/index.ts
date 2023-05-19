export const objectToUrlParams = (obj: object) => {
  const params = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (value !== '') {
        const encodedKey = encodeURIComponent(key);
        const encodedValue = encodeURIComponent(value);
        params.push(`${encodedKey}=${encodedValue}`);
      }
    }
  }

  return params.join('&');
};

export const parseObjValuesFromNumbersToString = (obj: object) => {
  let newObject = { ...obj };
  for (let key in newObject) {
    if (newObject.hasOwnProperty(key)) {
      let value = newObject[key];
      if (value !== '') {
        if (key.startsWith('lt_')) {
          (value as number)++;
        }
        if (key.startsWith('gt_')) {
          (value as number)--;
        }
        newObject[key] = Number.isNaN(Number(value)) ? value : Number(value);
      }
    }
  }
  return newObject;
};
