import dotenv from "dotenv";
import express, { Request, Response } from "express";
import connectToDB from "./database/database";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3051;
const MONGODB_URI = process.env.MONGODB_URI || "";

app.use(express.json())

if (MONGODB_URI !== "") {
  connectToDB(MONGODB_URI);
} else {
  console.log("No URI provided.")
}

app.get("/", (req: Request, res: Response) => {
  return res.send("Hello API")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`)
})