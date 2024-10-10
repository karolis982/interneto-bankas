import mongoose, { Schema } from "mongoose";

export default mongoose.model(
  "Client",
  new Schema({
    firstName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 20,
    },
    secondName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 20,
    },
    iban: {
      type: String,
      unique: true,
      required: true,
      minLength: 20,
      maxLength: 34,
    },
    idNumber: {
      type: String,
      unique: true,
      required: true,
      minLength: 11,
      maxLength: 11,
    },
    idPhoto: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  })
);
