<template>
  <header id="header">
    <h1 class="header-title">Travel-AI</h1>
    <p class="header-description">
      Travel-AI will help you plan your next vacation. No headaches, no long searches.
      Simply give me your destination, and I'll provide you a plan for your next vacation.
    </p>
  </header>
</template>

<script>
export default {};
</script>

<style>
#header {
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.8), rgba(239, 71, 111, 0.8));
  backdrop-filter: blur(10px);
  color: #fff;
  padding: 30px 20px;
  text-align: center;
  border-radius: 15px;
}

.header-title {
  font-size: 56px;
  font-weight: bold;
  margin: 0 0 0.5em 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-family: 'Pacifico', cursive; /* Use the fancy 'Pacifico' font */
  color: #fff;
}

.header-description {
  font-size: 24px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  color: #f5f5f5;
}

/* Media Query for Tablets */
@media screen and (max-width: 736px) {
  .header-title {
    font-size: 42px;
  }

  .header-description {
    font-size: 20px;
  }
}

/* Media Query for Mobile Phones */
@media screen and (max-width: 480px) {
  .header-title {
    font-size: 36px;
  }

  .header-description {
    font-size: 18px;
  }
}
</style>
