// src/utils/storage.js
const STORAGE_KEY = "taskData";

export const saveToStorage = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const getFromStorage = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const clearStorage = () => {
  localStorage.removeItem(STORAGE_KEY);
};
