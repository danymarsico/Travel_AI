<template>
  <div class="home">
    <header-el />
    <blurred-background />
    <div class="content">
      <prompt-area />
    </div>
    <footer-el />
  </div>
</template>

<script>
import BlurredBackground from '@/components/BlurredBackground.vue'
import HeaderEl from '../components/HeaderEl.vue'
import FooterEl from '../components/FooterEl.vue'
import PromptArea from '../components/PromptArea.vue'
export default {
  name: 'HomeView',
  components: {
    BlurredBackground,
    HeaderEl,
    FooterEl,
    PromptArea,
  }
}
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the page takes up at least the viewport height */
}
.content {
  flex: 1; /* Allow the content to expand and push the footer to the bottom */
  padding: 20px; /* Add spacing around the prompt area */
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* Add styling for the footer */
footer-el {
  margin-top: auto; /* Push the footer to the bottom */
}
</style>