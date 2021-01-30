<template>
  <div class="wrap">
    <div class="cube">
      <div class="front"></div>
      <div class="back"></div>
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
    <!--The cube-->
  </div>
  <!--The Wrap -->
</template>

<style scoped lang="scss">
@keyframes rotate {
  from {
    transform: rotateX(0deg);
    -ms-transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
  }
  to {
    transform: rotateX(360deg);
    -ms-transform: rotateX(360deg);
    -webkit-transform: rotateX(360deg);
  }
}
@-webkit-keyframes rotate {
  from {
    transform: rotateX(0deg);
    -ms-transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
  }
  to {
    transform: rotateX(360deg);
    -ms-transform: rotateX(360deg);
    -webkit-transform: rotateX(360deg);
  }
}

// Cube styles
.wrap {
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  perspective: 1000px;
  perspective-origin: 50% 50%;
  transform: translate(-50%, -50%) rotate(10deg);

  .cube {
    margin: auto;
    position: relative;
    height: 200px;
    width: 80vw;
    top: 0;
    left: 0;
    transform: rotate(10deg);
    animation: rotate 10s infinite linear;
    -webkit-animation: rotate 10s infinite linear;
    transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;

    div {
      position: absolute;
      box-sizing: border-box;
      padding: 10px;
      opacity: 0.9;
      border: solid 5px blue;
      color: #ffffff;
    }
  }
}

.top,
.bottom,
.front,
.back {
  width: 80vw;
  height: 200px;
}

// Cube Animation
.front {
  transform: translateZ(100px);
  -ms-transform: translateZ(100px);
  -webkit-transform: translateZ(100px);
}
.back {
  transform: translateZ(-100px) rotateY(180deg);
  -webkit-transform: translateZ(-100px) rotateY(180deg);
  -ms-transform: translateZ(-100px) rotateY(180deg);
}

.top {
  transform: rotateX(-270deg) translateY(-100px);
  -webkit-transform: rotateX(-270deg) translateY(-100px);
  -ms-transform: rotateX(-270deg) translateY(-100px);
  transform-origin: top center;
  -ms-transform-origin: top center;
  -webkit-transform-origin: top center;
}
.bottom {
  transform: rotateX(270deg) translateY(100px);
  -webkit-transform: rotateX(270deg) translateY(100px);
  -ms-transform: rotateX(270deg) translateY(100px);
  transform-origin: bottom center;
  -ms-transform-origin: bottom center;
  -webkit-transform-origin: bottom center;
}
</style>
