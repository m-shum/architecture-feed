<template>
  <div id="app">
    <topNavigation />
    <router-view v-slot="{ Component }">
      <transition name="fadeout" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <spinningCube />
</template>

<script>
import topNavigation from "@/components/topNavigation.vue";
import spinningCube from "@/components/spinningCube.vue";
export default {
  components: {
    topNavigation,
    spinningCube
  }
};
</script>

<style lang="scss">
// Default styles
html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

@font-face {
  font-family: "Gosha Sans";
  src: local("Gosha Sans"), url(assets/GoshaSans-Regular.otf);
}

#app {
  font-family: "Gosha Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  font-size: 52px;
}

a {
  text-decoration: none;
  color: inherit;
}

// Slideshow styles

img {
  max-width: 70vw;
  max-height: 70vh;
  outline: 5px solid black;
  outline-offset: -5px;
}

.gallery-container {
  flex-direction: column;
  height: 100vh;
}

.gallery-inner {
  flex: 1;
}

.gallery-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.gallery-nav {
  bottom: 0;
}

.gallery-nav,
.gallery-inner,
.gallery-container,
#nav {
  display: flex;
}

.gallery-nav,
#nav {
  position: fixed;
  justify-content: space-between;
  padding: 30px;
  width: 100%;
}

// Transitions

.fadeout-enter {
  opacity: 0;
  visibility: hidden;
}

.fadeout-enter-active,
.fadeout-leave-active {
  transition: all 0.5s;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
}

.fadeout-leave-to {
  opacity: 0;
  visibility: hidden;
}

// Media Queries
@media (max-width: 820px) and (max-height: 600px) {
  #app {
    font-size: 34px;
  }

  .gallery-nav,
  #nav {
    padding: 15px;
  }
}

@media (max-width: 750px) {
  #app {
    font-size: 27px;
  }
}

@media (max-width: 600px) and (orientation: portrait) {
  img {
    max-height: 90vh;
    max-width: 75vw;
  }
}
</style>
