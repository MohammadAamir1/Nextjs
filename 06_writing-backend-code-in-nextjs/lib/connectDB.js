import mongoose from "mongoose";

const DB_URI = process.env.MONGODB_URI;
// mongoose.connect(DB_URI);
// console.log("Database connected!");

// mongoose.model('Todo', {})

// export const db = mongoose.connection.db;

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected!");
      return;
    }
    await mongoose.connect(DB_URI);
    console.log("Database connected!");
  } catch (err) {
    console.log(err);
    console.log("Database not connected!");
    process.exit(1);
  }
};
