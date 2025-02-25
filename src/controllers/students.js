import { Student } from "../database/models/student.js";

export const getStudents =
  
  (req, res) => {
    res.json({ message: "GET" });
  };
export const postStudents = async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    if (!name || !email || !phone) {
      throw new Error("All fields are required");
    }
    //if data is valid, add to datbase
    const student = await Student.create({ name, email, phone });
    //respond to clieent with a success code and message
    res.json({
      success: true,
      data: student,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const putStudents =
  
  (req, res) => {
    res.json({ message: "PUT" });
  };
export const deleteStudents =
  
  (req, res) => {
    res.json({ message: "DELETE" });
  };
