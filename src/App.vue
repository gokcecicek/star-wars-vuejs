<template>
  <div id="app" class="container">
    <Header/>
    <main id="main">
      <router-view />
    </main>
    <Footer/>
  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import "./assets/scss/style.scss";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  watch: {
        $route: {
            immediate: true,
            handler() {
                document.title ='SWAPI';
            }
        },
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
