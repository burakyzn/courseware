import api from "../api"

const authService = {
  geyUserData: async () => {
    return api.get("user").then(response => response.data);
  }
};

export default authService;