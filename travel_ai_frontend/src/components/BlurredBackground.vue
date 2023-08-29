<template>
  <div class="blurred-background">
    <div class="background-layer" :style="{ 'background-image': currentImageStyle }"></div>
    <div class="background-layer" :style="{ 'background-image': nextImageStyle }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        require('../assets/bbep4E5.jpeg'),
        require('../assets/IO7nLzJ.jpeg'),
        require('../assets/ivFVDaj.jpeg'),
        require('../assets/kTc1tSm.jpeg'),
        require('../assets/MWYsSDe.jpeg'),
        require('../assets/wKW4rDY.jpeg'),
      ],

      currentImageIndex: 0,
    };
  },

  
};
</script>

<style scoped>
.blurred-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  filter: blur(5px);
  opacity: 1;
  animation: crossfade 8s infinite; /* Animation duration (half of the interval) */
}

@keyframes crossfade {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>