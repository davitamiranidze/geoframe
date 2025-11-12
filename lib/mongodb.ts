import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("❌ Please define the MONGODB_URI in .env.local");
}

export async function connectDB() {
  try {
    const conn = await mongoose.connect(MONGODB_URI, {
      dbName: "sample_mflix",
    });
    if (conn.connections[0].readyState === 1) {
      console.log("✅ Fully connected to MongoDB!");
    } else {
      console.log("❌ Not connected — state:", conn.connections[0].readyState);
    }
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    throw err;
  }
}
