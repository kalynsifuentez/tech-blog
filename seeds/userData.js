const { User } = require("../models");
const userData = [
  {
    username: "JohnDoe",
    email: "JohnDoe@example.com",
    password: "pa$$word1234",
  },
  {
    username: "JaneDoe",
    email: "JaneDoe@example.com",
    password: "Password471",
  },
  {
    username: "KateTill",
    email: "KateTill@example.com",
    password: "PassworD4M3",
  },
  {
    username: "DougJones",
    email: "DougJones@example.com",
    password: "MyPassword321",
  },
  {
    username: "JackWright",
    email: "JackWright@example.com",
    password: "OpenSeseme123",
  },

];
// Function to seed posts table with dummy data using bulkCreate method
const seedUsers = () => User.bulkCreate(userData);
// Exporting seedPosts function for use in other files
module.exports = seedUsers;