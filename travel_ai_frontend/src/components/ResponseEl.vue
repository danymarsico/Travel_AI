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
      <div></div>
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
  width: 70%;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.textarea-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.loading-text {
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  color: #6c6a6a;
}

#responsebox {
  width: 100%;
  height: 600px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

#responsebox::placeholder {
  color: #999;
}

#responsebox:focus {
  border-color: #4A90E2;
}

.button-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
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
