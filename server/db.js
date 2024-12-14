import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  secondTitle: { type: String, required: true },
  date: { type: Date, required: true },
  content: { type: String, required: true },
});

export const Blog = mongoose.model("Blog", blogSchema);
