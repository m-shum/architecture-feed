<template>
    <div>
        <a class="prev" @click="prev" href="#">&#10094; Previous</a>
        <a class="next" @click="next" href="#">&#10095; Next</a>
    </div>
</template>

<script>
export default {
    name: "lightboxnav",
    methods: {
    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  }
}
</script>

<style lang="scss" scoped>
    div {
        position: absolute;
        bottom: 10px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        width: 800px;
        display: flex;
        justify-content: space-between;
    }
</style>