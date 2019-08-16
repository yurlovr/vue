<template>
  <section class='form'>
    <form @submit.prevent>
      <h2 class='form__header'>
        {{ this.mode === MODE.AUTH ? $t('enterSystem') : $t('recovery') }}
      </h2>
      <section class='form__content'>
        <h3
          class='form__header form__header-instruction'
          v-if='this.mode === MODE.RECOVERY'
        >
          {{ $t('instruction') }}
        </h3>

        <span
          class='robot__icon'
          :class='{ "robot__icon-smile": !noAuth, "robot__icon-sad": noAuth }'
        ></span>
        <div
          class='form__input'
          :class='this.mode === MODE.AUTH ? "form__input-login" : "form__input-email"'
        >
          <input
            :class='{ error: noAuth }'
            @focus='onFocus'
            :type='this.mode === MODE.AUTH ? "text" : "email"'
            :name='this.mode === MODE.AUTH ? "login" : "email"'
            :value='this.mode === MODE.AUTH ? userLogin : userEmail'
            @input='changeInputValue'
            :placeholder='this.mode === MODE.AUTH ? $t("login") : $t("email")'
            required
          />
        </div>
        <div class='form__input form__input-lock' v-if='this.mode === MODE.AUTH'>
          <input
            :class='{ error: noAuth || !emailNotValid }'
            type='password'
            name='password'
            v-model='userPassword'
            :placeholder='$t("password")'
            @focus='onFocus'
            required
          />
          <span class='error__text' v-if='noAuth'>{{ $t('authError') }}</span>
        </div>
        <a
          class='form__restore-pass'
          href='/'
          id='recovery'
          v-if='this.mode === MODE.AUTH'
          @click.prevent='changeMode'
          :style='{ marginTop: noAuth ? "1px" : "20px" }'
        >
          {{ $t('restorePassword') }}
        </a>
        <div class='form__footer'>
          <button
            class='button'
            :class='{ "button-disabled": isDisabled }'
            @click='submitUserData'
          >
            {{ this.mode === MODE.AUTH ? $t('enter') : $t('send') }}
          </button>
        </div>
      </section>
    </form>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { MODE } from '@/store/modules/user/const'

export default {
  name: 'Form',
  data() {
    return {
      MODE
    }
  },

  computed: {
    ...mapGetters([
      'getUserLogin',
      'getUserPassword',
      'getUserEmail',
      'getNoAuth',
      'getMode'
    ]),
    userLogin: {
      get() {
        return this.getUserLogin
      },
      set(login) {
        this.setUserLogin(login)
      }
    },
    userPassword: {
      get() {
        return this.getUserPassword
      },
      set(pass) {
        this.setUserPassword(pass)
      }
    },
    userEmail: {
      get() {
        return this.getUserEmail
      },
      set(mail) {
        this.setUserEmail(mail)
      }
    },
    noAuth: {
      get() {
        return this.getNoAuth
      }
    },
    mode: {
      get() {
        return this.getMode
      }
    },

    isDisabled: function() {
      return this.mode === MODE.AUTH
        ? !this.userLogin || !this.userPassword
        : this.emailNotValid()
    }
  },
  methods: {
    ...mapActions([
      'setUserLogin',
      'setUserPassword',
      'setUserEmail',
      'setUserData',
      'setMode'
    ]),
    submitUserData() {
      if (this.isDisabled) {
        return
      }
      if (this.mode === MODE.AUTH) {
        let obj = {
          default: false,
          userLogin: this.userLogin,
          userPassword: this.userPassword
        }

        this.setUserData(obj)
      } else {
        //обработка отправки email
        let obj = {
          userEmail: this.userEmail
        }
        console.log(obj)
      }
    },

    onFocus() {
      if (this.noAuth && this.mode === MODE.AUTH) {
        let obj = {
          default: true
        }
        this.setUserData(obj)
      }
    },
    changeMode(event) {
      let target = event.target.id
      this.setMode(target.toUpperCase())
      this.setUserData({ default: true })
    },
    changeInputValue(event) {
      let value = event.target.value
      switch (this.mode) {
        case MODE.AUTH:
          this.userLogin = value
          break
        case MODE.RECOVERY:
          this.userEmail = value
          break
        default:
          return
      }
    },
    emailNotValid() {
      let reg = new RegExp(
        // eslint-disable-next-line
        /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
      )
      if (!this.userEmail) {
        return true
      } else {
        return !reg.test(this.userEmail)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.form {
  min-width: 300px;
  z-index: 1;

  &__header {
    font-size: 16px;
    font-weight: normal;
    line-height: 18px;
    padding: 20px 0;
    text-align: center;
    background-color: #fff;
    color: #383838;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom: 1px #e2ebf5 solid;
    margin: 0;
    &-instruction {
      max-width: 250px;
      margin: 0 auto;
      padding-top: 0;
      padding-bottom: 12px;
      border-bottom: 0;
      font-size: 14px;
      text-align: left;
    }
  }

  &__content {
    position: relative;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: #fff;
    padding-top: 20px;

    & .robot__icon {
      position: absolute;
      content: '';
      bottom: 23px;
      right: -63px;
      width: 100px;
      height: 80px;
      background-repeat: no-repeat;
      z-index: -1;
      &-smile {
        background-image: url('../../images/robo-smile.svg');
      }
      &-sad {
        background-image: url('../../images/robo-sad.svg');
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
      content: '';
      width: 24px;
      height: 24px;
      background-repeat: no-repeat;
    }

    &-login:before {
      background-image: url('../../images/login.svg');
    }

    &-email {
      margin-bottom: 30px;
      &:before {
        background-image: url('../../images/email.svg');
      }
    }

    &-lock:before {
      left: 22px;
      background-image: url('../../images/lock.svg');
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
      font-family: 'Ubuntu Light', serif;
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

      &-disabled {
        opacity: 0.5;
        background-color: #b1bbc5;
        cursor: default;
      }
    }
  }
}
</style>
