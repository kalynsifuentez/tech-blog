const { User } = require("../models");
const userData = [
  {
    username: "JohnDoe",
    password: "pa$$word1234",
  },
  {
    username: "JaneDoe",
    password: "Password471",
  },
  {
    username: "KateTill",
    password: "PassworD4M3",
  },
  {
    username: "DougJones",
    password: "MyPassword321",
  },
  {
    username: "JackWright",
    password: "OpenSeseme123",
  },

];
// Function to seed posts table with dummy data using bulkCreate method
const seedUsers = () => User.bulkCreate(userData);
// Exporting seedPosts function for use in other files
module.exports = seedUsers;