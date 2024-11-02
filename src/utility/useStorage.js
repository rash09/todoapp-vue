export default function useStorage() {
  const getStorage = (storageName) => {
    return JSON.parse(localStorage.getItem(storageName));
  };

  const setStorage = (storageName, val) => {
    return localStorage.setItem(storageName, JSON.stringify(val));
  };

  return { getStorage, setStorage };
}
