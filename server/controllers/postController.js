const { Post } = require('../models/post');

class PostController {
  async addPost(req, res) {
    const { login, password, email, body } = req.body;
    const post = await Post.create({ login, password, email });
    return res.json(post);
  }

  async getPost(req, res) {
    const post = await Post.findAll();
    return res.json(post);
  }
}

module.exports = new PostController();
