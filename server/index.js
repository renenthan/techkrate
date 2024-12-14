import express from "express"
import { Blog } from "./db.js";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();
const app =  express()

app.use(express.json())
app.use(cors())
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
    res.send("Hello, World!")
})

app.post("/addBlog", async(req, res) => {
    try {
        const { title, secondTitle, date, content } = req.body;
        const newBlog = new Blog({ title, secondTitle, date, content });
        await newBlog.save();
        res.status(201).send('Blog added successfully');
      } catch (error) {
        console.log(error)
        res.status(500).send('Failed to add blog');
      }
})

app.listen(port)
console.log(`app listening at http://localhost:${port}`)
