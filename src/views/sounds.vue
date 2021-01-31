<template>
  <div class="gallery-container">
    <div class="gallery-inner">
      <div
        class="aspect-ratio gallery-image"
        v-for="i in [currentIndex]"
        :key="i"
      >
        <iframe :src="currentImg" allow="autoplay;" frameborder="0"></iframe>
      </div>
    </div>
    <div class="gallery-nav">
      <a class="prev" @click="prev" href="#">Previous</a>
      <a class="next" @click="next" href="#">Next</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "videoslides",
  data() {
    return {
      images: [
        "https://www.youtube.com/embed/NJ3CA_RThDY?modestbranding=1&showinfo=0&autoplay=1",
        "https://www.youtube.com/embed/DZFTDIGpyn0?controls=0&autoplay=1&modestbranding=1&showinfo=0",
        "https://www.youtube.com/embed/hbe3CQamF8k?controls=0&autoplay=1&modestbranding=1&showinfo=0",
        "https://www.youtube.com/embed/KY0TZQTwwbk?controls=0&autoplay=1&modestbranding=1&showinfo=0",
        "https://www.youtube.com/embed/8r31DFrFs5A?controls=0&autoplay=1&modestbranding=1&showinfo=0"
      ],
      currentIndex: 0
    };
  },

  methods: {
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

<style scoped lang="scss">
.aspect-ratio {
  width: 60vw;
  height: 0;
  padding-bottom: 30%;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
}

// media queries
@media (max-width: 400px) and (orientation: portrait) {
  .aspect-ratio {
    width: 75vw;
    padding-bottom: 50%;
  }
}
</style>
