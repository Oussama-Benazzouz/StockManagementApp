import axios from "axios";

const BASE_URL = "http://localhost:8080/parts";

class PartService {
  // Get Method from api
  getAllParts() {
    return axios.get(BASE_URL);
  }

  savePart(partData) {
    return axios.post(BASE_URL, partData);
  }

  updatePart(id, partData) {
    return axios.put(`${BASE_URL}/${id}`, partData);
  }

  updatePartQuantity(id, partData) {
    return axios.put(`${BASE_URL}/${id}/quantity`, partData);
  }

  getPartById(id) {
    return axios.get(`${BASE_URL}/${id}`);
  }

  deletePart(id) {
    return axios.delete(`${BASE_URL}/${id}`);
  }
}

export default new PartService();
