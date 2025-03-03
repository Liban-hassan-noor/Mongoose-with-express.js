import { Device } from "../database/models/device.js";

export const getDevices = async (req, res) => {
  try {
    const devices = await Device.find();
    res.json({
      success: true,
      data: devices,
    });
  } catch (error) {
    return error.status(400).json({
      error: error.message,
    });
  }
};
export const postDevices = async (req, res) => {
  const { model, serial, type, color, student } = req.body;
  try {
    if (!model || !serial || !type || !color || !student) {
      throw new Error("All fields are required");
    }
    //if data is valid, add to datbase
    const dev = await Device.create({ model, serial, type, color, student });
    //respond to clieent with a success code and message
    res.json({
      success: true,
      data: dev,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const putDevices = async (req, res) => {
  try {
    //we are getting the id from the url
    const { id } = req.params;
    //we are getting the data from the body
    const { model, serial, type, color, student } = req.body;
    //we are updating the data in the database
    const updatedDevice = await Device.findByIdAndUpdate(id,{ model, serial, type, color, student },
      { new: true, runValidators: true }
    );
    //we are checking if updated device exist
    if (!updatedDevice) {
      return res.status(404).json({ error: "Device not found" });
    }
    //we are sending the updated device to the client
    res.json({
      success: true,
      data: updatedDevice,
    });
  } catch (error) {
    error.status(400).json({
      error: error.message,
    });
  }
};
export const deleteDevices = async (req, res) => {
  try {
    const { id } = req.params;
    const { model, serial, type, color, student } = req.body;
    const deletedDevice = await Device.findByIdAndDelete(id);
    if (!deletedDevice) {
      return res.status(404).json({ error: "Device not found" });
    }
    res.json({
      success: true,
      message: "Device deleted successfully",
      data: deletedDevice,
    });
  } catch (error) {
    error.status(400).json({
      message: error.message,
    });
  }
};
