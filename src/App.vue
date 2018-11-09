<template>
  <div id="app">
    <div class="header"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  -webkit-overflow-scrolling: touch;
}

.header {
  background-color: #2c3e50;
  height: 64px;
}
</style>
