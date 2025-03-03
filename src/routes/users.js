import { Router } from "express";

const userRouter = Router();
import {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers,
} from "../controllers/users.js";

userRouter.route("/").get(getUsers).post(postUsers);

userRouter.route("/:id").put(putUsers).delete(deleteUsers);

export { userRouter };
