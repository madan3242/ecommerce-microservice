import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String, required: true },
  phone: { type: Number },
  email: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
});

export const User = mongoose.model('User', userSchema);