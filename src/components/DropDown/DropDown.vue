<template>
  <div class="btn-group">
    <li @click="toggleMenu()" class="dropdown-toggle">
      {{ selectedOption.name.toLowerCase() }}
    </li>

    <ul class="dropdown-menu" v-if="showMenu">
      <li v-for="option in options" :key="option.id">
        <a href="javascript:void(0)" @click="updateOption(option)">
          {{ option.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: {
        name: ""
      },
      showMenu: false
    };
  },
  props: {
    options: {
      type: [Array, Object]
    },
    selected: {},
    placeholder: [String]
  },

  mounted() {
    this.selectedOption = this.selected;
  },

  methods: {
    updateOption(option) {
      this.selectedOption = option;
      this.showMenu = false;
      this.$emit("updateOption", this.selectedOption);
    },

    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-group {
  position: absolute;
  top: 16px;
  right: -22px;
  font-size: 13px;
  min-width: 160px;
  height: 40px;
  margin: 10px 1px;
  display: inline-block;
  vertical-align: middle;

  & a:hover {
    text-decoration: none;
  }
}

.dropdown-toggle {
  color: #48bdff;
  min-width: 160px;
  padding: 10px;
  text-transform: none;
  font-weight: 300;
  margin-bottom: 7px;
  border: 0;
  transition: background 0s ease-out;
  float: none;
  box-shadow: none;
  border-radius: 0;

  &:hover {
    cursor: pointer;
  }
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 13px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;

  & > li {
    overflow: hidden;
    width: 100%;
    position: relative;
    margin: 0;

    & > a {
      padding: 10px 30px;
      display: block;
      clear: both;
      font-weight: normal;
      line-height: 1.6;
      color: #333333;
      white-space: nowrap;
      text-decoration: none;
      text-align: center;

      &:hover {
        background: #efefef;
        color: #409fcb;
      }
    }
  }
}
li {
  list-style: none;
}
</style>
