import axios from "axios";

const BASE_URL = "http://localhost:8080/clients";

class ClientService {
  getAllClients() {
    return axios.get(BASE_URL);
  }

  saveClient(clientData) {
    return axios.post(BASE_URL, clientData);
  }

  updateClient(id, clientData) {
    return axios.put(`${BASE_URL}/${id}`, clientData);
  }

  getClientById(id) {
    return axios.get(`${BASE_URL}/${id}`);
  }

  deleteClient(id) {
    return axios.delete(`${BASE_URL}/${id}`);
  }
}

export default new ClientService();
