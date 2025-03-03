import { model, Schema } from "mongoose";

const deviceSchema = new Schema(
  {
    student:{
        type: Schema.Types.ObjectId,
        ref: "student",
        required: true,
    },
    model: {
      type: String,
      required: true,
    },
    serial: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Device = model("device", deviceSchema);
export { Device };

//student,model,serial,type,color, created at, updated at
