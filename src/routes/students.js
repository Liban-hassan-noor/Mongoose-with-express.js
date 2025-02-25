import { Router } from "express";
import {
  deleteStudents,
  getStudents,
  postStudents,
  putStudents,
} from "../controllers/students.js";
const studentsRouter = Router();

studentsRouter
  .route("/")

  .get(getStudents)
  .post(postStudents)
  .put(putStudents)
  .delete(deleteStudents);
export { studentsRouter };
