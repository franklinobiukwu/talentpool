import {Schema, model} from "mongoose";

//Define post schema
const PostSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: [true, "A Blog Post must have a title"],
      },
      description: {
        type: String,
        required: [true, "A Blog Post must have a description"],
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