<template>
  <div class="home">
    <blurred-background />
  </div>
</template>

<script>
import BlurredBackground from '@/components/BlurredBackground.vue'
export default {
  name: 'HomeView',
  components: {
    BlurredBackground,
  }
}
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the page takes up at least the viewport height */
}
</style>