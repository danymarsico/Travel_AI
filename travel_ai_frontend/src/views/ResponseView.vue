<template>
    <div class="response">
        <header-el />
        <blurred-background />
        <div class="content">
          <response-el />
        </div>
        <footer-el />
    </div>
</template>

<script>
import FooterEl from '../components/FooterEl.vue'
import HeaderEl from '../components/HeaderEl.vue'
import ResponseEl from '../components/ResponseEl.vue'
import BlurredBackground from '../components/BlurredBackground.vue'
export default {
  components: { HeaderEl, FooterEl, ResponseEl, BlurredBackground},

}
</script>

<style>
.response {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex: 1; /* Allow the content to expand and push the footer to the bottom */
  padding: 20px; /* Add spacing around the prompt area */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
footer-el {
  margin-top: auto;
}
</style>