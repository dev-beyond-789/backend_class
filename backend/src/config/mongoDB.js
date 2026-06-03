const { MONGO_URI } = require("./env");
const mongoose = require("mongoose");
const connectmongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = {
  connectmongoDB,
};
