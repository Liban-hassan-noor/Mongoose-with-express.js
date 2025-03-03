//import { Schema } from "mongoose"
import { model, Schema } from "mongoose";

const logschema = new Schema(
  {
    device: {
      type: Schema.Types.ObjectId,
      ref: "device",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    status: {
      type: String,
      default:"active",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Log = model("log", logschema);
export { Log };
