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
import dropdown from "vue-dropdowns";
import { LANGUAGES, COUNTRY } from "@/locales/locales";

export default {
  name: "Header",
  data() {
    return {
      arrayOfLanguage: LANGUAGES.map(lang => {return {...lang, name: lang.name[0].toUpperCase() + lang.name.slice(1)}}),
      selectedLanguage: {
            // ...LANGUAGE.find(lang => lang.id === COUNTRY.RUS),
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
      console.log(this.selectedLanguage);
      this.changeLanguage(payload.id);
    }
  }
};
</script>

<style lang="scss">
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
    right: 30px;
    text-align: start;
    font-size: 15px;
    color: #96b3d2;
    & > span {
      cursor: pointer;
      color: #48bdff;
    }
  }

  & .btn-group {
    position: absolute;
    top: 16px;
    right: 0;
    font-size: 13px;
  }

  & .dropdown-toggle {
    color: #48bdff;
    background-image: none;
    &:hover {
      background: none;
    }
  }

  & .dropdown-menu {
    font-size: 13px;
    & > li > a {
      text-align: center;
    }
  }

  & .caret {
    display: none;
  }
}
</style>
