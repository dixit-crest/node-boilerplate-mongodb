const mongoose = require("mongoose");

/**
 * Schema for `Notes`
 * 
 * Represents a collection schema
 */
const noteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
  },
  { collection: "notes" }
);

module.exports = mongoose.model("Note", noteSchema);
