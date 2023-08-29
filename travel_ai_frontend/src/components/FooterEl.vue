<template>
  <footer id="footer">
    <ul class="copyright">
      <li>- &copy; Travel-AI 2023  -</li>
    </ul>
  </footer>
</template>

<script>
export default {};
</script>

<style>
#footer {
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.8), rgba(239, 71, 111, 0.8)); /* Semi-transparent gradient */
  backdrop-filter: blur(10px); /* Blur effect on supporting browsers */
  color: #fff; /* Light text color */
  padding: 10px;
  text-align: center;
  border-radius: 10px; /* Slightly more rounded corners for a smoother look */
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

ul li {
  padding: 0.5em;
}

/* Hover effect (optional) */
#footer:hover {
  opacity: 1;
}

/* Responsive adjustments */
@media screen and (max-width: 1680px) {
  #footer {
    bottom: 3.5em;
    left: 3.5em;
  }
}
@media screen and (max-width: 736px) {
  #footer {
    bottom: 2em;
    left: 2em;
  }
}
@media screen and (max-width: 360px) {
  #footer {
    bottom: 1.25em;
    left: 1.25em;
  }
}
@media screen and (max-height: 640px) {
  #footer {
    bottom: auto;
    left: auto;
    margin: 1em 0 0 0;
    position: relative;
  }
}
</style>
