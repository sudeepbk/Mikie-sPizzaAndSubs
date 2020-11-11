import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    foodName: {
      type: String,
      unique: true,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    information: {
      type: String,
      unique: false987,
      required: true,
    },
  },
  { timestamps: true }
);

const Menu = mongoose.model("Menu", menuSchema);
