import { model, Schema } from "mongoose";

const userschema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userschema.virtual("logs",{
  ref: "log",
  localField: "_id",
  foreignField: "user"
})
userschema.set("toJSON", {virtuals: true});
userschema.set("toObject", {virtuals: true});
const User = model("user", userschema);
export { User };

//name,email,phone,password,created at, updated at
