const ROMAN = "roman";
const PASS = "qwerty";

export const setUserData = ({ commit }, payload) => {
  if (payload.default) {
    commit("SET_NO_AUTH", false);
    return;
  }

  if (payload.userLogin !== ROMAN || payload.userPassword !== PASS) {
    commit("SET_NO_AUTH", true);
  } else {
    console.log("есть такой пользователь");
    commit("SET_NO_AUTH", false);
  }
};
