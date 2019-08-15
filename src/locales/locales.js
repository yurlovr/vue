export const LOCALES = {
  eng: {
    language: 'Lang',
    enterSystem: 'Login to account',
    login: 'Login',
    password: 'Password',
    restorePassword: 'Restore password',
    enter: 'Sign in',
    authError: 'Wrong login or password',
    send: 'Send',
    email: 'Email',
    instruction: 'Recovery Instructions password will be sent to the mail',
    recovery: 'Password recovery',
    goBack: 'Back',
  },

  rus: {
    language: 'Язык',
    enterSystem: 'Войти в систему',
    login: 'Логин',
    password: 'Пароль',
    restorePassword: 'Восстановить пароль',
    enter: 'Войти',
    authError: 'Неверный логин или пароль',
    send: 'Отправить',
    email: 'Электронная почта',
    instruction: 'Инструкция по восстановлению пароля будет отправлена на почту',
    recovery: 'Восстановление пароля',
    goBack: 'Назад',
  }
}

export const LANGUAGES = [
  { name: 'Русский', id: 'rus' },
  { name: 'English', id: 'eng' },
]

export const COUNTRY = {
  RUS: 'rus',
  ENG: 'eng',
}

export const LOCALES_FOR_I18N = {
  eng: { translation: LOCALES.eng },
  rus: { translation: LOCALES.rus },
}
