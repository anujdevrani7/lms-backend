import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true, 
    lowercase: true,
    trim: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"], // Regex validation for email format
  },
  password: {
    type: String,
    required: true,
    // minlength: 6, 
  },
  firstName: {
    type: String,
    required: true,
    trim:true
},
lastName: {
    type: String,
    required: true,
    trim:true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const User=model('User',userSchema)