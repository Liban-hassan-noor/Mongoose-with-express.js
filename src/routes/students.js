import { Router } from "express";
import {
  deleteStudents,
  getStudents,
  postStudents,
  putStudents,
  getSingleStudent,
} from "../controllers/students.js";
const studentsRouter = Router();

studentsRouter
  .route("/")

  .get(getStudents)
  .post(postStudents);

studentsRouter
  .route("/:id")
  .put(putStudents)
  .delete(deleteStudents)
  .get(getSingleStudent);
export { studentsRouter };
