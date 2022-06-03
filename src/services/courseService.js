import api from "../api"

const courseService = {
  getAll: async () => {
    return api.get("courses").then(response => response.data);
  },
  getByCategory: async (categoryId) => {
    return api.get(`courses?categories=${categoryId}`).then(response => response.data);
  }
};

export default courseService;