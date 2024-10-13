import {Schema, model} from "mongoose";

//Define post schema
const PostSchema = new Schema(
    {
      title: {
        type: String,
        required: [true, "A job must have a title"],
      },
      description: {
        type: String,
        required: [true, "A job must have a description"],
      },

      requirements: {
        type: String,
        required: [true, "A job must have requirements"],
      },

      duties: {
        type: String,
        required: [true, "A job must have duties"],
      },

      location:{
      type: String,
      required:[true, "job must have a location"],
      },

      salary: {
        trype: Number
      },
      currency: {
        type: String,
        },
      company: {
        type: String,
        required: [true, "A job must have a company"],
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
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      state: {
        type: String,
        enum: ["draft", "published"],
        default: "draft",
      },
      body: {
        type: String,
        required: [true, "A job Post must contain a body"],
      },
      readTime: {
        type: String,
      },
    },
    { timestamps: true }
  );
  const Post = model("Post", PostSchema);
  export default Post


