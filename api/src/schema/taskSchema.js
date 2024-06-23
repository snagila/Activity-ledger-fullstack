import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  taskTime: { type: Number, required: true },
  type: { type: String },
});
export default mongoose.model("tasks", taskSchema);
