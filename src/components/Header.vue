<template>
  <header class='app__header'>
    <p
      class='app__header-lang app__header-lang-back'
      v-if='this.mode === MODE.RECOVERY'
      @click='goPageAuth'
    >
      {{ $t('goBack') }}
    </p>
    <h1 class='app__header-main'>
      Teleop
    </h1>
    <p class='app__header-lang'>{{ $t('language') }}:</p>
    <DropDown
      :options='arrayOfLanguage'
      :selected='selectedLanguage'
      v-on:updateOption='methodToRunOnSelect'
    >
    </DropDown>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DropDown from '@/components/DropDown/DropDown'
import { LANGUAGES, COUNTRY } from '../locales/locales'
import { MODE } from '@/store/modules/user/const'

export default {
  name: 'Header',
  data() {
    return {
      arrayOfLanguage: LANGUAGES,
      selectedLanguage: {
        name: LANGUAGES.find(lang => lang.id === COUNTRY.RUS).name.toLowerCase()
      },
      MODE
    }
  },
  components: {
    DropDown
  },

  computed: {
    ...mapGetters(['getLang', 'getMode']),
    lang: {
      get() {
        return this.getLang
      }
    },
    mode: {
      get() {
        return this.getMode
      }
    }
  },
  methods: {
    ...mapActions(['setLang', 'setMode']),
    changeLanguage(lang) {
      this.setLang(lang)
      this.$i18n.i18next.changeLanguage(lang)
    },
    methodToRunOnSelect(payload) {
      this.selectedLanguage = payload.name.toLowerCase()
      this.changeLanguage(payload.id)
    },
    goPageAuth() {
      this.setMode(MODE.AUTH)
    }
  }
}
</script>

<style lang="scss" scoped>
.app__header {
  position: relative;
  padding-top: 20px;
  height: calc(10vh - 20px);
  text-align: center;

  &-main {
    font-size: 42px;
    line-height: 48px;
    font-style: normal;
    font-weight: 300;
    color: #96b3d2;
    margin: 0;
  }

  &-lang {
    position: absolute;
    width: 130px;
    top: 20px;
    right: 35px;
    text-align: start;
    font-size: 15px;
    color: #96b3d2;
    &-back {
      left: 35px;
      cursor: pointer;
    }
    & > span {
      cursor: pointer;
      color: #48bdff;
    }
  }
}
</style>
