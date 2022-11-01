const mongoose = require("mongoose");
const { USER_TYPES } = require("../utils/constants");

/**
 * Schema for `User`
 * 
 * Represents a collection schema
 */
const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
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
    },
    token: {
      type: String,
    },
    passwordToken: {
      type: String,
    },
    role: {
      type: Number,
      default: USER_TYPES.CUSTOMER,
      required: true,
    },
  },
  { collection: "user" }
);

module.exports = mongoose.model("User", userSchema);
