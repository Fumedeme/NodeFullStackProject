const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.connectionString);
    console.log(
      "Database Connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

module.exports = connectDb;
