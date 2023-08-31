<template>
    <div class="response">
        <header-el />
        <response-el />
        <footer-el />
    </div>
</template>

<script>
import FooterEl from '../components/FooterEl.vue'
import HeaderEl from '../components/HeaderEl.vue'
import ResponseEl from '../components/ResponseEl.vue'
export default {
  components: { HeaderEl, FooterEl, ResponseEl },

}
</script>

<style>

</style>