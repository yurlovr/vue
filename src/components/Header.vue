<template>
  <header class="app__header">
    <h1 class="app__header-main">
      Teleop
    </h1>
    <p class="app__header-lang">
      {{ $t("language")}}:
    </p>
    <dropdown
      :options="arrayOfLanguage"
      :selected="selectedLanguage"
      v-on:updateOption="methodToRunOnSelect"
    >
    </dropdown>
  </header>
</template>

<script>
import { mapGetters,mapActions } from "vuex";
import dropdown from "../components/DropDown/DropDown";
import { LANGUAGES, COUNTRY } from "../locales/locales";

export default {
  name: "Header",
  data() {
    return {
      arrayOfLanguage: LANGUAGES,
      selectedLanguage: {
            name: LANGUAGES.find(lang => lang.id === COUNTRY.RUS).name.toLowerCase()
          },
        }
  },
  components: {
    dropdown
  },

  computed: {
    ...mapGetters(["getLang"]),
    lang: {
      get() {
        return this.getLang;
      }
    },
  },
  methods: {
    ...mapActions(["setLang"]),
    changeLanguage(lang) {
      this.setLang(lang);
      this.$i18n.i18next.changeLanguage(lang);
    },
    methodToRunOnSelect(payload) {
      this.selectedLanguage = payload.name.toLowerCase();
      this.changeLanguage(payload.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.app__header {
  position: relative;
  padding-top: 20px;
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
    width: 130px;
    top: 20px;
    right: 15px;
    text-align: start;
    font-size: 15px;
    color: #96b3d2;
    & > span {
      cursor: pointer;
      color: #48bdff;
    }
  }
}
</style>
