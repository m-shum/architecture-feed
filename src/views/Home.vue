<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <div class="gallery-nav">
      <a class="prev" @click="prev" href="#">&#10094; Previous</a>
      <a class="next" @click="next" href="#">&#10095; Next</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "slideshow",
  data() {
    return {
      images: [
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpaper.com%2Fmain%2Fstyles%2Fresponsive_1680w_scale%2Fs3%2Fpurcell_clifton_cathedral_cphil_boorman_3.jpg&f=1&nofb=1","https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi2.wp.com%2Fwww.commercialnewsmedia.com%2Fwp-content%2Fuploads%2F2016%2F02%2FCastlemead-18-300dpi-1.jpg%3Ffit%3D1073%252C1391&f=1&nofb=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-9ViKYYdYDbk%2FUEE-NpcQFtI%2FAAAAAAAAASA%2F4_zoXt46QnU%2Fs1600%2FPrince%2BStreet%2B1.JPG&f=1&nofb=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthespoonsterspouts.com%2Fwp-content%2Fuploads%2F2019%2F03%2FLloyds-building-brutalism.jpg&f=1&nofb=1"
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
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>
