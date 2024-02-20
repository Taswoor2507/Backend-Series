import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`App is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error in connecting database -->", error);
  });

// import { DB_NAME } from "./constants.js";
// import express from "express";

// const app = express();

// // using EFFI
// (async () => {
//   try {
//     const connectionInstance = await mongoose.connect(
//       `${process.env.MONGODB_URI}/${DB_NAME}`
//     );
//     console.log(`DB connected on --> ${connectionInstance.connection.host}`);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//     // throw error;
//   }
//   app.on("error", (error) => {
//     console.log(`Error in connectuion in database due to ${error}`);
//     throw error;
//   });

//   app.listen(process.env.PORT, () => {
//     console.log(`App is running on port ${process.env.PORT}`);
//   });
// })();
