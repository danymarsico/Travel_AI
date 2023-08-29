<template>
  <div id="prompt">
    <div class="input-group">
      <label for="city">Travel's destination:</label>
      <input v-model="this.travelInfo.city" type="text" id="city" placeholder="Enter the country/city" @input="validateInput" />
      <pre v-if="errorMessage" style="color:red">{{ errorMessage }}</pre>
    </div>

    <div class="input-group">
      <label for="days">Number of days:</label>
      <input v-model="this.travelInfo.days" type="number" id="days" placeholder="Days" min="0" />
    </div>

    <button id="submitBtn" @click="loadResult">Plan My Vacation</button>
  </div>
</template>

<script>
import TravelService from '../services/TravelService';
export default {
  data() {
    return {
      travelInfo: {
        city: '',
        days: 0,
      },
      errorMessage: '',
    };
  },
  methods: {
    validateInput(event) {
          const regex = /^[a-zA-Z]+$/;
          if (!regex.test(event.target.value)) {
            event.target.value = event.target.value.replace(/[^a-zA-Z]/g, '');
            this.errorMessage = 'Please enter alphabetic characters only.';
          } else {
            this.errorMessage = '';
          }
        },
        loadResult() {
          if(this.travelInfo.city === '' || this.travelInfo.days === 0){
            alert('Please enter a destination and number of days')
          } else{
            this.$store.state.city = this.travelInfo.city;
            this.$store.state.days = this.travelInfo.days;
            this.$router.push( {name: 'travel', params: {city: this.travelInfo.city} });
            TravelService.sendTravelInfo(this.travelInfo)
            .then((response) => {
              this.$store.commit('SET_TRAVEL_PLAN', response.data);
            })

          }
          
        }
  }
};
</script>

<style>
#prompt {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.input-group {
  display: flex; /* Set to flex to arrange label and input side by side */
  flex-direction: row; /* Display label and input in a row */
  align-items: center; /* Align items vertically center */
  margin-bottom: 15px;
}

.input-group label {
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px; /* Add some spacing between label and input */
  color: #333;
  background-color: #f1f1f1;
  padding: 5px;
  border-radius: 5px;
}

.input-group input {
  flex: 1; /* Occupy remaining space */
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  margin-top: 5px;
}

input::placeholder {
  color: #999;
}

input:focus {
  border-color: #4A90E2;
}

button#submitBtn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4A90E2;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button#submitBtn:hover {
  background-color: #357EBD;
}
</style>