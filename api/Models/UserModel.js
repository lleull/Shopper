import { Schema, model } from "mongoose";

const Usermodel = new Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    require: true,
  },

  country: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const UserSchema = model("Register", Usermodel);
export default UserSchema;
