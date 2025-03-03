import { User } from "../database/models/user.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      success: true,
      data: users,
    });
  } catch (error) {
    error.status(400).json({
      error: error.message,
    });
  }
};
//name,email,phone,password,username,created at, updated at
export const postUsers = async (req, res) => {
  const { name, email, phone, password, username } = req.body;
  try {
    if (!name || !email || !password || !phone || !username) {
      return res.status(400).json({ error: "All fields are required" });
    }

    //create it in db
    const user = await User.create({ name, email, phone, password, username });
    //send a message to the client
    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const putUsers = async (req, res) => {
  try {
    const { id } = req.params;
    //we are getting the data from the body
    const { name, email, phone, password, username } = req.body;
    //we are updating the data in the database
    const updatedUsers = await User.findByIdAndUpdate(
      id,
      { name, email, phone, password, username },
      { new: true, runValidators: true }
    );
    //we are checking if updated user exist
    if (!updatedUsers) {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    error.status(400).json({
      error: error.message,
    });
  }
};
export const deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, password, username } = req.body;
    const deletedUsers = await User.findByIdAndDelete(id);
    if (!deletedUsers) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({
      success: true,
      message: "deleted user successfully",
      data: deletedUsers,
    });
  } catch (error) {
    error.status(400).json({
      error: error.message,
    });
  }
};
