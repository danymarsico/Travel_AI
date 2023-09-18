<template>
  <div id="response">
    <div class="response-container" v-if="loading">
      <p class="loading-text">
        We are currently planning your next trip to {{ this.$store.state.travelInfo.city }}.
        Start preparing your luggages!
      </p>
      <img v-if="loading" src="../assets/loading.gif" alt="Loading..." />
    </div>
    
    <div class="textarea-container" v-else>
      <textarea v-model="this.$store.state.travelInfo.travelPlan" id="responsebox"></textarea>
      <div class="button-container">
        <button @click="planNewVacation">Plan Another Vacation</button>
        <button @click="downloadTravelPlan">Download Travel Plan</button>
      </div>
    </div>
  </div>
</template>

<script>
import travelService from '../services/TravelService'
import jsPDF from 'jspdf';
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
    },

    async downloadTravelPlan() {
      if (this.$store.state.travelInfo.travelPlan !== '') {
    const text = this.$store.state.travelInfo.travelPlan;
    const doc = new jsPDF();
    const webAppName = 'Travel AI';

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);

    const textWidth = doc.getTextWidth(webAppName);
    const pageWidth = doc.internal.pageSize.getWidth();
    const centerXAxis = (pageWidth - textWidth) / 2;

    doc.text(webAppName, centerXAxis, 15)

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');

    const paragraphs = text.split('\n');
    const contentWidth = doc.internal.pageSize.getWidth() - 20;
    
    const linesPerPage = Math.floor((doc.internal.pageSize.getHeight() - 28) / 12);
    let currentLine = 0;

    for (const paragraph of paragraphs) {
      const lines = doc.splitTextToSize(paragraph, contentWidth);
      for (const line of lines) {
        if (currentLine >= linesPerPage) {
          doc.addPage();
          currentLine = 0;
        }
        doc.text(line, 10, 28 + currentLine * 12);
        currentLine++;
      }
    }

    const pdfBlob = doc.output('blob');
    const blobUrl = URL.createObjectURL(pdfBlob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'travel_AI_plan.pdf';
    link.click();
  } else {
    alert("Sorry, there's nothing to download!");
  }
},

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

.textarea-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the textarea and buttons vertically */
  gap: 20px; /* Add some spacing between textarea and buttons */
}

#responsebox {
  width: 100%; /* Make the textarea full width */
  height: 400px; /* Adjust the height as needed */
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

.button-container {
  display: flex;
  justify-content: space-between; /* Space buttons evenly */
  width: 100%; /* Make the button container full width */
}

.button-container button {
  flex: 1;
  margin: 5px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4A90E2;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #357EBD;
}
</style>
