
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ MongoDB ulandi");
  } catch (error) {
    console.log("❌ Xatolik:", error);
  }
};

module.exports = connectDB;
