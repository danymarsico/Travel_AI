<template>
  <div id="response">
    <textarea v-model="this.$store.state.travelPlan" id="responsebox"></textarea>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#response {
  background-color: #f1f1f1; /* Light gray background */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow effect */
}

#responsebox {
  width: 600px;
  height: 400px; /* Reduced the height to fit better with the design */
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc; /* Light gray border */
  border-radius: 5px;
  outline: none;
}

#responsebox::placeholder {
  color: #999; /* Placeholder text color */
}

#responsebox:focus {
  border-color: #4A90E2; /* Border color on focus */
}
</style>
