<template>
  <section class="form">
    <form action="/" method="post">
      <p class="form__header">
        Войти в систему
      </p>
      <section class="form__content">
        <div class="form__input -login">
          <input
            type="text"
            name="login"
            v-model="userLogin"
            placeholder="Логин"
            required
          />
        </div>
        <div class="form__input -lock">
          <input
            class="error"
            type="password"
            name="password"
            placeholder="Пароль"
            v-model="userPassword"
            required
          />
          <span class="error__text">Неверный логин или пароль</span>
        </div>
        <a class="form__restore-pass" href="/">Восстановить пароль</a>
        <div class="form__footer">
          <button class="button" @click="sendForm">Войти</button>
        </div>
      </section>
    </form>
  </section>
</template>

<script>
//import { mapGetters } from "vuex";
export default {
  name: "Form",

  computed: {
    //...mapGetters(["getUserLogin, getUserPassword"]),

    userLogin: {
      get() {
        return this.$store.state.userLogin.message;
      },
      set(login) {
        this.$store.commit("SET_LOGIN", login);
      }
    },
    userPassword: {
      get() {
        return this.$store.state.userPassword.message;
      },
      set(pass) {
        this.$store.commit("SET_PASSWORD", pass);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  min-width: 300px;
  z-index: 1;
  &__header {
    font-size: 16px;
    line-height: 18px;
    padding: 20px 0;
    text-align: center;
    background-color: #fff;
    color: #383838;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom: 1px #e2ebf5 solid;
    margin: 0;
  }
  &__content {
    position: relative;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: #fff;
    padding-top: 20px;
    &:before {
      position: absolute;
      content: "";
      bottom: 23px;
      right: -63px;
      width: 100px;
      height: 80px;
      background-image: url("../../images/robo-smile.svg");
      background-repeat: no-repeat;
      z-index: -1;
    }
  }
  &__input {
    position: relative;
    padding: 9px 20px;
    padding-left: 60px;

    &:before {
      position: absolute;
      top: 10px;
      left: 25px;
      content: "";
      width: 24px;
      height: 24px;
      background-repeat: no-repeat;
    }

    &.-login:before {
      background-image: url("../../images/login.svg");
    }
    &.-lock:before {
      left: 22px;
      background-image: url("../../images/lock.svg");
    }
    & input {
      min-width: 200px;
      background: #f4f7fd;
      border: 0;
      border-radius: 20px;
      padding: 5px 10px;
      font-size: 14px;
      line-height: 16px;
      font-family: inherit;
      &::placeholder {
        color: #a7b7c9;
      }

      &.error {
        box-shadow: 0 0 0 1px #ff4848;
      }
    }
    .error__text {
      display: block;
      margin-top: 5px;
      padding-left: 10px;
      color: #ff4848;
      font-family: "Ubuntu Light", serif;
      font-size: 12px;
      line-height: 14px;
      font-weight: lighter;
    }
  }

  &__restore-pass {
    display: block;
    text-align: center;
    padding: 9px 0;
    margin-bottom: 20px;
    margin-top: 20px;
    color: #48bdff;
    text-decoration: none;
  }

  &__footer {
    & .button {
      font-size: 16px;
      line-height: 18px;
      background: #48bdff;
      color: #ffffff;
      font-weight: 500;
      border: 0;
      width: 100%;
      padding: 10px 0;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      cursor: pointer;
    }
  }
}
</style>
