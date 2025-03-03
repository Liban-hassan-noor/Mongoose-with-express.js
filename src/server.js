import express from "express";
import "dotenv/config";

import { studentsRouter } from "./routes/students.js";
import { devicesRouter } from "./routes/devices.js";
import { userRouter } from "./routes/users.js";
import { logsRouter } from "./routes/logs.js";
import { connectDB } from "./database/config.js";

const app = express();

const PORT = process.env.PORT
connectDB();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/students", studentsRouter);

app.use("/logs", logsRouter);

app.use("/devices", devicesRouter);

app.use("/users", userRouter);

// app.use("/api", studentsRouter, logsRouter, deviceRouter, userRouter)

app.listen(PORT, () => {
  console.log(`your server is running on port ${process.env.port}`);
});
