const { Post } = require("../models");

const postData = [
  {
    title: "MVC",
    content: "MVC (Model-View-Controller) is a pattern in software design commonly used to implement user interfaces, data, and controlling logic. Source: MDN Web Docs",
    user_id: 1,
  },
  {
    title: "Node",
    content: "Node is an open-source, cross-platform runtime environment that allows developers to create all kinds of server-side tools and applications in Javascript. Source: MDN Web Docs",
    user_id: 2,
  },
  {
    title: "HTML",
    content: "HTML is the bones of web app!",
    user_id: 3,
  },
  {
    title: "CSS",
    content: "CSS creates the look and feel for a website.",
    user_id: 4,
  },
  {
    title: "JavaScript",
    content: "Javascript is the most important part of coding!",
    user_id: 5,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;