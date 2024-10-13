import {Schema, model} from "mongoose";
import { CurrencyCodes } from "validator/lib/isISO4217";

//Define post schema
const PostSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: [true, "A Blog job must have a title"],
      },
      description: {
        type: String,
        required: [true, "A Blog job must have a description"],
      },

      location:{
      type: String,
      required:[true, "job must have a location"],
      },

      salary: {
        trype: Number
      },

      tags: [String],
      readCount: {
        type: Number,
        default: 0,
      },
      author: {
        type: String,
        required: true,
      },
      authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      state: {
        type: String,
        enum: ["draft", "published"],
        default: "draft",
      },
      body: {
        type: String,
        required: [true, "A Blog Post must contain a body"],
      },
      readTime: {
        type: String,
      },
    },
    { timestamps: true }
  );
  const Post = mongoose.model("Post", PostSchema);
  module.exports = Post;