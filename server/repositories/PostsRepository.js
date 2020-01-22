const Post = require('../models/post');

class PostsRepository {
  constructor(model) {
    this.model = model;
  }

  create(object) {
    return this.model.create(object);
  }

  getAll() {
    return this.model.find({});
  }
}

module.exports = new PostsRepository(Post);
