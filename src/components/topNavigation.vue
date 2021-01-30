<template>
  <div id="nav">
    <div class="header-name" @hover="steps">
      <p>BRUTAL</p>
      <p>BRISTOL</p>
    </div>
    <div class="link-views">
      <p><router-link to="/">SIGHTS</router-link></p>
      <p><router-link to="/about">SOUNDS</router-link></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
#nav {
  a {
    &.router-link-exact-active {
      color: blue;
    }
  }
  p {
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  .header-name p:first-of-type {
    text-align: left;
  }
  .link-views p {
    text-align: right;
  }
}
</style>
