import express, { Router } from "express";
import cors from "cors";
import { connectMongo } from "./src/config/dbConfig.js";
import { taskRouter } from "./src/router/taskRouter.js";

const app = express();
const PORT = 8000;

connectMongo();

// middlewares
const corsOptions = {
  credentials: true,
  origin: true,
};
app.use(cors(corsOptions));
app.use(express.json());

// Routers
app.use("/api/tasks", taskRouter);

// server starting
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log("Your server is running.");
});
