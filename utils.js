export const createId = (arr) => {
  let nextId = 1;
  if (arr.length) {
    nextId = arr[arr.length - 1].id + 1;
  }
  return nextId;
};
export const findUserById = (id, arr) => {
  return arr.find((i) => i.id === parseInt(id));
};
export const checkForEmptyObject = (obj) => {
  return Object.entries(obj).length !== 0;
};
