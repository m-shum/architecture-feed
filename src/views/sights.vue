<template>
  <div class="gallery-container">
    <div class="gallery-inner">
      <div class="gallery-image" v-for="i in [currentIndex]" :key="i">
        <transition
          appear
          @before-enter="beforeEnter"
          @enter="enter"
          :css="false"
        >
          <img :src="currentImg" />
        </transition>
      </div>
    </div>
    <div class="gallery-nav">
      <a class="prev" @click="prev" href="#">Previous</a>
      <a class="next" @click="next" href="#">Next</a>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "slideshow",
  data() {
    return {
      images: [
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpaper.com%2Fmain%2Fstyles%2Fresponsive_1680w_scale%2Fs3%2Fpurcell_clifton_cathedral_cphil_boorman_3.jpg&f=1&nofb=1",
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi2.wp.com%2Fwww.commercialnewsmedia.com%2Fwp-content%2Fuploads%2F2016%2F02%2FCastlemead-18-300dpi-1.jpg%3Ffit%3D1073%252C1391&f=1&nofb=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-9ViKYYdYDbk%2FUEE-NpcQFtI%2FAAAAAAAAASA%2F4_zoXt46QnU%2Fs1600%2FPrince%2BStreet%2B1.JPG&f=1&nofb=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthespoonsterspouts.com%2Fwp-content%2Fuploads%2F2019%2F03%2FLloyds-building-brutalism.jpg&f=1&nofb=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthespoonsterspouts.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fstik-figures-graffiti-brutalism-bristol.jpg&f=1&nofb=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F3d%2Fbe%2Fd2%2F3dbed297c07e7d346ea8039ae8273b37.jpg&f=1&nofb=1",
      ],
      currentIndex: 0,
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 2000);
    },
    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    },
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = "scale(0.98)";
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 0.3,
        opacity: 1,
        scale: 1,
        ease: "ease.out",
        onComplete: done,
      });
    },
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>
