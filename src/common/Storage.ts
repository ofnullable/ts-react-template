export const Storage = {
  get(key: string) {
    const value = localStorage.getItem(key);
    if (!value) {
      return null;
    }

    return JSON.parse(value);
  },
  set(key: string, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
};
