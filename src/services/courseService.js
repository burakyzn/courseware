import api from "../api"

const courseService = {
  getAll: async () => {
    return api.get("courses").then(response => response.data);
  }
};

export default courseService;