import mongoose, { Schema } from "mongoose";

export default mongoose.model(
  "User",
  new Schema({
    userName: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  })
);
