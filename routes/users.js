const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/PinterestDb");

const userSchema = new mongoose.Schema({
  username: { 
    type: String,
    required: true,
    unique: true 
  },
  email: {
    type: String, 
    required: true, 
    unique: true 
  },
  dp: {
    type: String,
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'post'
  }],
  password: { 
    type: String
  },
  fullname: { 
    type: String,
    required: true
  },
});

userSchema.plugin(plm);

module.exports = mongoose.model('User', userSchema);

