import mongoose from "mongoose";

export const connectToDB = () => {
  mongoose
    .connect(process.env.DB_URI || "mongodb://127.0.0.1:27017",{
      dbName:"test"
    })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((e) => {
      console.log(e);
    });
};
