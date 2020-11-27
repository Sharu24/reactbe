const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const mongoUri = "mongodb://localhost/reactdb";
const mongoCloud =
  "mongodb+srv://sharu24:Dominar@24@bootcamp.i5p6q.gcp.mongodb.net/reactdb?retryWrites=true&w=majority";

const dbConnect = async () => {
  try {
    await mongoose.connect(mongoUri, options);
    console.log("Successfully connected to mongodb");
  } catch (err) {
    console.log("Unable to connect to mongo db");
  }
};

dbConnect();
