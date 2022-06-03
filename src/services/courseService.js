import api from "../api"

const courseService = {
  getAll: async () => {
    return api.get("courses").then(response => response.data);
  },
  getByCategoryId: async (categoryId) => {
    return api.get(`courses?categories=${categoryId}`).then(response => response.data);
  },
  getByAuthorId: async (authorId) => {
    return api.get(`courses?authorId=${authorId}`).then(response => response.data);
  }
};

export default courseService;