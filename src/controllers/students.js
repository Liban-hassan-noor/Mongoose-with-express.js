import { Student } from "../database/models/student.js";

export const getStudents = async (req, res) => {
 try {const student = await student.find();
  res.json({
    success: true,
    data: student,
  });
} catch (error) {
  return res.status(400).json({
    error: error.message,
  });
 }
 
}


export const getSingleStudent = async (req, res) => {
  try {
    //get the id from params or URL
    const { id } = req.params;
    //we find the student using ID
    const student = await Student.findById(id);
    //validate
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json({
      success: true,
      data: student,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
}
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

export const putStudents = async (req, res) => {
  try {
    //we are getting the id from the url
    const { id } = req.params;
    //we are getting the data from the body
    const { name, email, phone } = req.body;
    //we are updating the data in the database
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, email, phone },
      { new: true, runValidators: true }

    );
    //we are checking if updated student exist
    if (!updatedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }
  } catch (error) {
    error.status(400).json({
      error: error.message,
    });
  }
};

export const deleteStudents = async(req, res) => {
  try {
    const {id} = req.params;
    const {name, email, phone} = req.body;
    const deletedStudent = await Student.findByIdAndDelete(id);
    if(!deletedStudent){
      return res.status(404).json({error: "Student not found"});
    }
    res.json({
      success: true,
      message: "Student deleted",
      data: deletedStudent,
    });
  } catch (error) {
    error.status(400).json({ error: error.message });
  }
};
