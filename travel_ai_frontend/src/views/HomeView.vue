<template>
  <div class="home">
    <header-el />
    <blurred-background />
  </div>
</template>

<script>
import BlurredBackground from '@/components/BlurredBackground.vue'
import HeaderEl from '../components/HeaderEl.vue'
export default {
  name: 'HomeView',
  components: {
    BlurredBackground,
    HeaderEl,
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