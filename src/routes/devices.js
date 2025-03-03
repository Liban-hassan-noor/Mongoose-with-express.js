import { Router } from "express";
const devicesRouter = Router();
import {
  getDevices,
  postDevices,
  putDevices,
  deleteDevices,
} from "../controllers/devices.js";

devicesRouter.route("/").get(getDevices).post(postDevices);

devicesRouter.route("/:id").put(putDevices).delete(deleteDevices);

export { devicesRouter };
