<template>
  <div id="app">
    <router-view />
    <footer-nav />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterNav from '@/components/FooterNav.vue';

export default {
  name: 'App',
  components: {
    FooterNav
  }
};
</script>

<style lang="postcss">
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  touch-action: manipulation;
  -webkit-touch-callout: none;
  font-family: 'PingFang SC', Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-size-adjust: none;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
  background: #f5f5f5;
}
ul,
li {
  list-style: none;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.container {
  flex: 1;
  width: 100%;
  height: auto;
  background: url('./assets/images/bg.png') #fff center top no-repeat;
}
</style>
