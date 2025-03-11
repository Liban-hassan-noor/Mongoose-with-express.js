import {hash} from"bcrypt"
import {User} from "../models/user.js"
import { jwt } from "jsonwebtoken";
export const postUsers = async (req, res) => {
  const { name, email, phone, password, username } = req.body;

  User.password = await hash(password, 10);
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