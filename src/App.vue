<template>
<div id="nav">
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
</div>
  <router-view />
</template>


<style lang="scss">
@font-face {
  font-family: Gosha Sans;
  src: url(/assets/GoshaSans-Regular.otf);
}

#app {
  font-family: 'Gosha Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  font-size: 64px;
}

a {
  text-decoration: none;
  color: inherit;
}

#nav {
  padding: 30px;

  a {
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

img {
  max-width: 800px;
  max-height: 60vh;
}
</style>
