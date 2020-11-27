const mongoose = require("mongoose");
const config = require("./config");

const dbConnect = async () => {
  try {
    await mongoose.connect(config.mongoCloud, config.options);
    console.log("Successfully connected to mongodb");
  } catch (err) {
    console.log("Unable to connect to mongo db");
  }
};

dbConnect();
