import mongoose from "mongoose";

export default async function connectDb() {
  await mongoose.connect("mongodb://admin:admin@27017/fabula");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
