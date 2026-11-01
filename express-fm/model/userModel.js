const mongoose = require("mongoose");
const crypto = require("crypto");

const md5 = (value) => crypto.createHash("md5").update(value).digest("hex");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    set: (value) => md5(value),
    select: false,
  },
  phone: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: null,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
    default: Date.now(),
  },
  age: {
    type: Number,
    default: null,
  },
});

module.exports = userSchema;
