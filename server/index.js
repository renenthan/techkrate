import express from "express";
import { Blog } from "./db.js";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

connectToDatabase();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/addBlog", async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const { title, secondTitle, date, content, author , readTime} = req.body;
    const newBlog = new Blog({ title, secondTitle, date, content, readTime, author });
    await newBlog.save();
    res.status(201).send("Blog added successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to add blog");
  }
});

// New route to get all blogs
app.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find(); // Fetch all blogs from the database
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to retrieve blogs");
  }
});

app.listen(port);
console.log(`App listening at http://localhost:${port}`);
