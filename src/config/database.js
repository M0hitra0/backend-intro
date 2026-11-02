import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

const connectDB = async () => {
  try {
    let uri = process.env.MONGODB_URI;
    let connectionString;
    if (uri.includes("?")) {
      const [base, query] = uri.split("?");
      const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
      connectionString = `${trimmedBase}/${DB_NAME}?${query}`;
    } else {
      const trimmedBase = uri.endsWith("/") ? uri.slice(0, -1) : uri;
      connectionString = `${trimmedBase}/${DB_NAME}`;
    }

    const connectionInstance = await mongoose.connect(connectionString);
    console.log(
      `MongoDB connected successfully! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection FAILED: ", error);
    process.exit(1);
  }
};

export default connectDB;
export { connectDB };
