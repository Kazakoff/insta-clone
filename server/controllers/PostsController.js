const PostsRepository = require('../repositories/PostsRepository');

module.exports.createPost = (req, res) => {
  const post = req.body;

  PostsRepository.create(post)
    .then((newUser) => {
      res.json(newUser);
    })
    .catch((errors) => {
      res.status(500).json({
        errors
      });
    });
};

module.exports.getAllPosts = (req, res) => {
  PostsRepository.getAll()
    .then((posts) => {
      res.json(posts);
    })
    .catch((errors) => {
      res.status(500).json({
        errors
      });
    });
};
