import api from "../api"

const authService = {
  getUserData: async () => {
    return api.get("user").then(response => response.data);
  }
};

export default authService;