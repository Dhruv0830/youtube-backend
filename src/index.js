import connectDB from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js";
import { error, log } from "console";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(
    app.on("errror", (error) => {
      console.log("ERROR:", error);
      throw error;
    }),

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.log("MONGODB connection error :", err);
  });
