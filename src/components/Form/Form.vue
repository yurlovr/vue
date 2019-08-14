<template>
  <section class="form">
    <form v-on:submit.prevent>
      <p class="form__header">
        {{$t("enterSystem") }}
      </p>
      <section class="form__content">
        <span
          class="robot__icon"
          :class="{ smile: !noAuth, sad: noAuth }"
        ></span>
        <div class="form__input -login">
          <input
            :class="{ error: noAuth }"
            @focus="onFocus"
            type="text"
            name="login"
            v-model="userLogin"
            placeholder= ""
            required
          />
        </div>
        <div class="form__input -lock">
          <input
            :class="{ error: noAuth }"
            @focus="onFocus"
            type="password"
            name="password"
            placeholder=""
            v-model="userPassword"
            required
          />
          <span class="error__text" v-if="noAuth"
            >{{$t('authError') }}</span
          >
        </div>
        <a
          class="form__restore-pass"
          href="/"
          @click.prevent
          :style="{ marginTop: noAuth ? '1px' : '20px' }"
          >
          {{$t('restorePassword') }}
        </a>
        <div class="form__footer">
          <button
            class="button"
            :class="{ disabled: isDisabled }"
            @click="submitUserData"
          >
            {{$t('enter') }}
          </button>
        </div>
      </section>
    </form>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Form",
  data() {
    return {
    };
  },

  computed: {
    ...mapGetters(["getUserLogin", "getUserPassword", "getNoAuth"]),
    userLogin: {
      get() {
        return this.getUserLogin;
      },
      set(login) {
        this.setUserLogin(login);
      }
    },
    userPassword: {
      get() {
        return this.getUserPassword;
      },
      set(pass) {
        this.setUserPassword(pass);
      }
    },
    noAuth: {
      get() {
        return this.getNoAuth;
      },
    },

      isDisabled: function () {
        return (!this.userLogin || !this.userPassword)
      },
  },
  methods: {
    ...mapActions(["setUserLogin", "setUserPassword", "setUserData"]),
    submitUserData() {
      if (this.isDisabled) {
        return;
      }
      let obj = {
        default: false,
        userLogin: this.userLogin,
        userPassword: this.userPassword
      };
      this.setUserData(obj);
    },
    onFocus() {
      if (this.noAuth) {
        let obj = {
          default: true,
          userLogin: "",
          userPassword: ""
        };
        this.setUserData(obj);
      }
    },
  },
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

    & .robot__icon {
      position: absolute;
      content: "";
      bottom: 23px;
      right: -63px;
      width: 100px;
      height: 80px;
      background-repeat: no-repeat;
      z-index: -1;
      &.smile {
        background-image: url("../../images/robo-smile.svg");
      }
      &.sad {
        background-image: url("../../images/robo-sad.svg");
      }
    }
  }

  &__input {
    position: relative;
    padding: 8px 20px;
    padding-left: 60px;

    &:before {
      position: absolute;
      top: 11px;
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
      outline: none;

      &::placeholder {
        color: #a7b7c9;
      }

      &.error {
        box-shadow: inset 0 0 0 1px #ff4848;
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
      outline: none;

      &.disabled {
        opacity: 0.5;
        cursor: default;
      }
    }
  }
}
</style>
