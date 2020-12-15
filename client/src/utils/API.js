import axios from "axios"

export default{
    saveLocation: function(locationInfo) {
        return axios.post("/api/input", locationInfo);
      }

}