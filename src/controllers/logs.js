import { Log } from "../database/models/log.js";
export const getlogs = async (req, res) => {
try {
  const logs = await Log.find().populate("device",["serial"]).populate("user",["name"]);
  res.json({
    success: true,
    data:logs,

  })
  
} catch (error) {
  return res.status(400).json({
    message:error.message,
})
};
}
//device,user,status
export const postlogs = async (req, res) => {
  const { device, user, status } = req.body;
try {
  if (!device || !user) {
    res.status(400).json({ error: "All fields are required" });
  }
  //create in db
  const log = await Log.create({ device, user});
  //send message to client
  res.json({
    success: true,
    data: log,
  });
} catch (error) {
  return res.status(400).json({
    message:error.message,
  })
}
  //verify
  
};
export const putlogs = async(req, res) => {
try {
  //we are taking id from the url
  const { id } = req.params;
  //we are taking data from the body
  const { device, user, status } = req.body;
  
  //we are updating the data in the database
  const updatedLog = await Log.findByIdAndUpdate(
    id,
    { status:"inactive" },
    { new: true, runValidators: true }
  );
  //we are checking if the updated log exist
  if (!updatedLog) {
    return res.status(404).json({ error: "Log not found" });

  }
  res.json({
    success: true,
    message:"updated su ccessfully",
    data: updatedLog,
  });
} catch (error) {
  error.status(400).json({
    error: error.message,
  });
}
};
export const deletelogs = async (req, res) => {
try {
  const {id} = req.params;
  const {device, user, status} = req.body;

  const deletedLog = await Log.findByIdAndDelete(id);
  if(!deletedLog){
    return res.status(404).json({error: "Log not found"});
  }
  res.json({
    success: true,
    message: "Log deleted",
    data: deletedLog,
  });
} catch (error) {
  error.status(400).json({
    error: error.message,
  });
}

}

