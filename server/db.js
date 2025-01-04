import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  secondTitle: { type: String },
  date: { type: Date, default: Date.now },
  readTime: { type: String },
  author: { type: String },
  content: { type: String, required: true },
});

export const Blog = mongoose.model("Blog", blogSchema);
