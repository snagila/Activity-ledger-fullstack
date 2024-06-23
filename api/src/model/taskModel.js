import taskSchema from "../schema/taskSchema.js";

// Creating data
export const createTask = (formData) => {
  return taskSchema(formData).save();
};

// Reading data
export const getTask = () => {
  return taskSchema.find();
};

// updating the data
export const updateTaskModel = (id, updatedType) => {
  return taskSchema.findByIdAndUpdate(id, updatedType);
};
