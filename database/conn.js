import mongoose from "mongoose";

export default async function connect() {
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("Connect database successfully");
  } catch (error) {
    console.log(error);
  }
}