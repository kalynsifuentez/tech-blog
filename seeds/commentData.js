const { Comment } = require("../models");

const commentData = [
  {
    commentary: "I do not agree with this commentary!",
    user_id: 3,
    post_id: 4,
  },
  {
    commentary: "I like this!",
    user_id: 1,
    post_id: 2,
  },
  {
    commentary: "This has helped so much, good perpective!",
    user_id: 4,
    post_id: 2,
  },
  {
    commentary: "Good commentary!",
    user_id: 2,
    post_id: 3,
  },
  {
    commentary: "I disagree with you!",
    user_id: 5,
    post_id: 4,
  },
  {
    commentary: "This article does not have a good perspective",
    user_id: 1,
    post_id: 2,
  },
  {
    commentary: "I agree!",
    user_id: 2,
    post_id: 2,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;