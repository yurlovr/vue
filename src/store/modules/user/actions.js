export const setUserLogin = ({ commit }, payload) =>
  commit("SET_USER_LOGIN", payload);

export const setUserPassword = ({ commit }, payload) =>
  commit("SET_USER_PASSWORD", payload);

export const setUserEmail = ({ commit }, payload) =>
    commit("SET_USER_EMAIL", payload);

export const setMode = ({ commit }, payload) => {
  commit("SET_MODE", payload);
};
