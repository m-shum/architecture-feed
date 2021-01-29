<template>
<div id="nav">
  <div class="header-name"><p>BRUTAL</p><p>BRISTOL</p></div>
  <div class="link-views">
    <p><router-link to="/">SIGHTS</router-link></p>
    <p><router-link to="/about">SOUNDS</router-link></p>
  </div>
</div>
  <router-view />
</template>


<style lang="scss">

html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
  }

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
  a {
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  p {
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  .header-name p:first-of-type {
    transform: translateX(-9px);
  }
  .link-views p:first-of-type {
    transform: translateX(12px);
  }
}

img {
  max-width: 800px;
  max-height: 70vh;
  border: solid 4px black;
}

.gallery-container {
  flex-direction: column;
  height: 100vh;
}

.gallery-inner {
  flex: 1;
  align-items: center;
  justify-content: center;
}

.gallery-nav {
  bottom: 0;
}

.gallery-nav, .gallery-inner, .gallery-container, #nav {
  display: flex;
}

.gallery-nav, #nav {
  position: fixed;
  justify-content: space-between;
  padding: 30px;
    width: 100%;
}
</style>
