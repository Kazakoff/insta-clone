const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema({
  dataTime: {
    type: Date,
    required: true,
    default: () => new Date()
  },
  user: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: 'Email address is required',
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  likes: {
    type: [String]
  },
  content: {
    type: String,
    trim: true
  },
  pic: {
    type: String
  }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
