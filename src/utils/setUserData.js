const setUserData = (data) => {
  window.localStorage.setItem('user', JSON.stringify(data));
};

export { setUserData };
