import axios from 'axios';

const http = axios.create({
    baseURL: "http://localhost:9000"
});

export default{

    sendTravelInfo(travelInfo) {
        const url = '/travelInfo';
        return http.post(url, travelInfo);
    }

}