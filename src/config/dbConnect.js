import mongoose from "mongoose";

mongoose.connect("mongodb+srv://madrade1472:6YUTkXeVNozAtipW@cluster0.zt1zbr3.mongodb.net/test");

let db = mongoose.connection;
export default db;