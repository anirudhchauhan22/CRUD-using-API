import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Removes extra spaces
    },
    email: {
      type: String,
      required: true,
      unique: true, // Prevent duplicate emails
      lowercase: true, // Normalize email to avoid case sensitivity issues
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields automatically
);

// Use singular "User" (Mongoose automatically pluralizes it)
export default mongoose.model("User", userSchema);
