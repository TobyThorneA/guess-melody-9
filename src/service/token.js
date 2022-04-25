const DATA_USER = 'data-user';

export const getDataUser = () => {
  const dataUser = localStorage.getItem(DATA_USER);
  return dataUser? JSON.parse(dataUser) : '';
};

export const saveDataUser = (data) => {
  localStorage.setItem(DATA_USER, data);
};
