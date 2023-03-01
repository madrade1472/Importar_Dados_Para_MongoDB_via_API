import mongoose from "mongoose";
const logSchema = new mongoose.Schema({
  appName: { type: String },
  startExecDateTime: { type: Date, required: true },
  endExecDateTime: { type: Date },
  host : {type: String},
  errorLog : {type: String},
});

const logs = mongoose.model("logs", logSchema);
export default logs;
