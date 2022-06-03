import api from "../api"

const authorService = {
  getById: async (id) => {
    return api.get(`authors?id=${id}`).then(response => response.data[0]);
  }
};

export default authorService;