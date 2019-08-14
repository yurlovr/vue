export const LOCALES = {
  eng: {
    language: "Lang",
    enterSystem: "Login to account",
    login: "Login",
    password: "Password",
    restorePassword: "Restore password",
    enter: "Sign in",
    authError: "Wrong login or password"
  },

  rus: {
    language: "Язык",
    enterSystem: "Войти в систему",
    login: "Логин",
    password: "Пароль",
    restorePassword: "Восстановить пароль",
    enter: "Войти",
    authError: "Неверный логин или пароль"
  }
};

export const LANGUAGES = [
  { name: "pусский", id: "rus" },
  { name: "english", id: "eng" }
];

export const COUNTRY = {
  RUS: "rus",
  ENG: "eng"
};

export const LOCALES_FOR_118 = {
  eng: { translation: LOCALES.eng },
  rus: { translation: LOCALES.rus }
};
