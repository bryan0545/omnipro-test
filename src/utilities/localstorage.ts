import { localstorageKeys } from "../constants/constants";

export const saveLocalStorageObj = (key: localstorageKeys, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorageObj = (key: localstorageKeys) => {
  const data = localStorage.getItem(key);
  const response = data && JSON.parse(data);
  return response;
};
