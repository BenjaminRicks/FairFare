import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8080;

import connectDB from "./config/db.js";
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("api running");
});

app.listen(port, () => console.log(`server running on port ${port}`));