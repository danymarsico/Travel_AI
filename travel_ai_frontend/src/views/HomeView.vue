<template>
  <div class="home">
    <header-el />
    <blurred-background />
    <footer-el />
  </div>
</template>

<script>
import BlurredBackground from '@/components/BlurredBackground.vue'
import HeaderEl from '../components/HeaderEl.vue'
import FooterEl from '../components/FooterEl.vue'
export default {
  name: 'HomeView',
  components: {
    BlurredBackground,
    HeaderEl,
    FooterEl,
  }
}
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the page takes up at least the viewport height */
}
/* Add styling for the footer */
footer-el {
  margin-top: auto; /* Push the footer to the bottom */
}
</style>