<template>
  <div id="response">
    <div class="response-container" v-if="loading">
      <p class="loading-text">
        We are currently planning your next trip to {{ this.$store.state.travelInfo.city }}.
        Start preparing your luggages!
      </p>
      <img v-if="loading" src="../assets/loading.gif" alt="Loading..." />
    </div>
    
    <textarea v-else v-model="this.$store.state.travelInfo.travelPlan" id="responsebox"></textarea>
    <button v-if="!loading" @click="planNewVacation">Plan another vacation</button>
  </div>
</template>

<script>
import travelService from '../services/TravelService'
export default {
  data() {
    return {
      loading: true,
    }
  },
  methods: {
    planNewVacation() {
      this.$store.commit('CLEAR_TRAVEL_INFO');
      this.$router.push({name: 'home'});
    }
  },
created() {
travelService.sendTravelInfo(this.$store.state.travelInfo)
            .then((response) => {
              this.$store.commit('SET_TRAVEL_PLAN', response.data.content);
              this.loading = false;
            })
            .catch((error) => {
              console.error("Error sending Travel Info: ", error);
              this.loading = false;
            });
}
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
