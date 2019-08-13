<template>
  <div id="app">
    <Header/>
    <MainApp/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainApp from "@/components/MainApp";

export default {
  name: 'app',
  components: {
    MainApp,
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: "Ubuntu", sans-serif;;
  background-color: #E2EBF5;
}
</style>
