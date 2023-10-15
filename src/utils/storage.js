export const storage = {
  getToken: () => {
    return window.localStorage.getItem('user-token');
  },
  setToken: token => {
    window.localStorage.setItem('user-token', JSON.stringify(token));
  },
  getAccountName: () => {
    return window.localStorage.getItem('user-accountname');
  },
  setAccountName: accountName => {
    window.localStorage.setItem('user-accountname', JSON.stringify(accountName));
  },
  clearStorage: () => {
    window.localStorage.removeItem('user-token');
    window.localStorage.removeItem('user-accountname');
  },
};
