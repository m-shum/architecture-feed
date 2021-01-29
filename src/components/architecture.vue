<template>
  <div>
    <transition-group name="fade" tag="div">
      <div class="lightbox" v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <lightboxnav />
  </div>
</template>

<script>

import lightboxnav from "@/components/lightbox-nav.vue";

export default {
  name: "slideshow",
    components: {
    lightboxnav
  },
  data() {
    return {
      images: [
        "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    },
    brutalism: function () {
      this.images = ["https://images.unsplash.com/photo-1595658511703-2cad160de181?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80", "https://anotherimg-dazedgroup.netdna-ssl.com/1200/0-0-2803-1868/azure/another-prod/380/1/381026.jpg", "https://i.pinimg.com/564x/68/f8/9f/68f89f4f1aeda838941596fd8b3ee5a9.jpg", "https://pdnonline.com/wp-content/uploads/2016/09/09-EXPOSURES-Ty-Cole-02-150517-London-Brutalism-2315.jpg"]
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .lightbox {
    width: 100vw;

    img {
      max-width: 800px;
      max-height: 800px;
    }
  }

</style>
