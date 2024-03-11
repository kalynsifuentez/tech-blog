const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require("../utils/auth");

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = postData.map((post) =>
      post.get({ plain: true })
    );

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one post
router.get('/post/:id',  async (req, res) => {

    // If the user is logged in, allow them to view the gallery
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: [
              'username',
            ],
          },
          {
            model: Comment,
            include: [{ model: User, attributes: ["username"] }],
          },
        ],
      });
      const post = postData.get({ plain: true });
      res.render(post, {loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  
});

router.get('/dashboard', withAuth, async (req, res) => {
  // If the user is not logged in, redirect the user to the login page

    // If the user is logged in, allow them to view the posts
    try {
      const postData = await Post.findAll({
        where: { user_id: req.session.user_id },
        include: [{ model: User, attributes: ["username"] }],
      });

      const posts = postData.map((post) => post.get({ plain: true }));

      res.render('dashboard', { posts, loggedIn: req.session.logged_in });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signup");
});


router.get("/newpost", withAuth, (req, res) => {
  
    res.render("newpost");
  
  
});

module.exports = router;
