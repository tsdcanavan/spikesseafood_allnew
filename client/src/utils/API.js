import axios from "axios";

export default {
  // Gets all books
  getMenus: function() {
    return axios.get("/api/menus");
  },
  // Gets the book with the given id
  getMenus: function(id) {
    return axios.get("/api/menus/" + id);
  },
  // Deletes the book with the given id
  deleteMenu: function(id) {
    return axios.delete("/api/menus/" + id);
  },
  // Saves a book to the database
  saveMenu: function(menuData) {
    return axios.post("/api/menus", menuData);
  }
};
