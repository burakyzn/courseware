import api from "../api"

const categoryService = {
  getAll: async () => {
    return api.get("categories").then(response => response.data);
  }
};

export default categoryService;