const Post = require('../models/post');

class PostsRepository {
  constructor(model) {
    this.model = model;
  }

  create(object) {
    return this.model.create(object);
  }
}

module.exports = new PostsRepository(Post);
