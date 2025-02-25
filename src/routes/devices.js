import { Router } from "express";
const devicesRouter = Router();
import { getDevices,postDevices,putDevices,deleteDevices } from "../controllers/devices.js";

devicesRouter
  .route("/devices")
  .get(getDevices)
  .post(postDevices)
  .put(putDevices)
  .delete(deleteDevices);

export {devicesRouter};
