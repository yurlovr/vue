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
  },

  de: {
    language: 'Sprache',
    enterSystem: 'Einloggen',
    login: 'Benutzername',
    password: 'Passwort',
    restorePassword: 'Passwort wiederherstellen',
    enter: 'Einloggen',
    authError: 'Ungültiger Benutzername oder Passwort',
    send: 'Senden',
    email: 'E-Mail',
    instruction: 'Anweisungen zur Passwortwiederherstellung werden per E-Mail gesendet',
    recovery: 'Passwort Wiederherstellung',
    goBack: 'Zurück',
  },

  nl: {
    language: 'Taal',
    enterSystem: 'Inloggen',
    login: 'Login',
    password: 'Wachtwoord',
    restorePassword: 'Herstel wachtwoord',
    enter: 'Inloggen',
    authError: 'Ongeldige gebruikersnaam of wachtwoord',
    send: 'Te sturen',
    email: 'E-mail',
    instruction: 'Instructies voor wachtwoordherstel worden naar de e-mail verzonden',
    recovery: 'Wachtwoord herstel',
    goBack: 'Geleden',
  },

  it: {
    language: 'Lingua',
    enterSystem: 'Accedi',
    login: 'Accesso',
    password: 'Password',
    restorePassword: 'Recuperare la password',
    enter: 'Accedi',
    authError: 'Nome utente o password non validi',
    send: 'Inviare',
    email: 'E-mail',
    instruction: 'Le istruzioni per il recupero della password verranno inviate alla posta',
    recovery: 'Recupero password',
    goBack: 'Fa',
  },
}

export const LANGUAGES = [
  { name: 'Русский', id: 'rus' },
  { name: 'English', id: 'eng' },
  { name: 'Deutsch', id: 'de' },
  { name: 'Nederlands', id: 'nl' },
  { name: 'Italiano', id: 'it' },

]

export const COUNTRY = {
  RUS: 'rus',
  ENG: 'eng',
  DE: 'de',
  NL: 'nl',
  IT: 'it',
}

export const LOCALES_FOR_I18N = {
  eng: { translation: LOCALES.eng },
  rus: { translation: LOCALES.rus },
  de: { translation: LOCALES.de },
  nl: { translation: LOCALES.nl },
  it: { translation: LOCALES.it },
}
