<template>
  <router-link to="/"><button class="button-footer">Home</button></router-link>

  <router-view />
</template>

<style lang="scss">
@import "assets/styles/styles.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

body {
  background-image: url("assets/img/main.jpg");
  background-size: cover;
}

nav {
  padding: 30px;
}
</style>
