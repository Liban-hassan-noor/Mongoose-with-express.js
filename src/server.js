import express from "express";
import "dotenv/config";

import { studentsRouter } from "./routes/students.js";
import { devicesRouter } from "./routes/devices.js";
import { userRouter } from "./routes/users.js";
import { logsRouter } from "./routes/logs.js";
import { connectDB } from "./database/config.js";

const app = express();
connectDB()

app.use(express.json());
;
app.get("/", (req, res) => {
  res.send("hello world");
});
//student requests
/*
app.get("/students", getStudents);
app.post("/students", postStudents);
app.put("/students", putStudents);
app.delete("/students", deleteStudents);
 */
app.use("/students", studentsRouter);

//logs request
/*
app.get("/logs", getlogs);
app.post("/logs", postlogs);
app.put("/logs", putlogs);
app.delete("/logs", deletelogs);
*/
//app.route("/logs").get(getlogs).post(postlogs).put(putlogs).delete(deletelogs);
app.use("/logs", logsRouter);

//devices request
/*
app.get("/devices", getDevices);
app.post("/devices", postDevices);
app.put("/devices", putDevices);
app.delete("/devices", deleteDevices);
*/
/*
app
  .route("/devices")
  .get(getDevices)
  .post(postDevices)
  .put(putDevices)
  .delete(deleteDevices);
*/
app.use("/devices", devicesRouter);
//users request
/*
app.get("/users", getUsers);
app.post("/users", postUsers);
app.put("/users", putUsers);
app.delete("/users", deleteUsers);
*/ /*
app
  .route("/users")
  .get(getUsers)
  .post(postUsers)
  .put(putUsers)
  .delete(deleteUsers);
*/
app.use("/users", userRouter);

app.listen(process.env.port, () => {
  console.log(`your server is running on port ${process.env.port}`);
});
