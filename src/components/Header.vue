<template>
  <header class="app__header">
    <h1 class="app__header-main">
      Teleop
    </h1>
    <p class="app__header-lang">
      Язык: <span @click="setLanguage(lang)">{{lang}}</span>
    </p>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",

  computed: {
      ...mapGetters({getLang:"getLang"}),
      lang: {
          get(){
              return this.getLang;
          }
      }
  },
  methods: {
      ...mapActions({setLang:"setLang"}),
      setLanguage(lang){this.setLang(lang)}
  },
};
</script>

<style lang="scss" scoped>
.app__header {
  position: relative;
  height: 10vh;
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
    font-size: 15px;
    color: #96b3d2;
    top: 0;
    right: 30px;
    & > span {
      cursor: pointer;
      color: #48bdff;
    }
  }
}
</style>
