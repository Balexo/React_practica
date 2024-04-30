const storage = {
  get(key) {
    const value = localStorage.getItem(key);

    if (!value) {
      return null;
    }

    return JSON.stringify(value);
  },

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  remove(key) {
    localStorage.remove(key);
  },

  clear() {
    localStorage.clear();
  },
};

export default storage;
