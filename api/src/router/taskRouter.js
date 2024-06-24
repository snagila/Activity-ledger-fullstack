import express from "express";
import {
  createTask,
  deleteTaskModel,
  getTask,
  updateTaskModel,
} from "../model/taskModel.js";

export const taskRouter = express.Router();

// CREATE / POST
taskRouter.post("/", (req, res) => {
  const formData = req.body;
  createTask(formData)
    .then((createdFormData) => {
      res.json({
        status: "success",
        data: createdFormData,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error,
      });
    });
});

// READ || GET
taskRouter.get("/", (req, res) => {
  getTask()
    .then((task) => {
      res.json({
        status: "success",
        data: task,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message,
      });
    });
});

// PATCH || UPDATE
taskRouter.patch("/:id", (req, res) => {
  const { id } = req.params;
  const updatedField = req.body;

  updateTaskModel(id, updatedField)
    .then((updatedTask) => {
      res.json({
        status: "success",
        data: updatedTask,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message,
      });
    });
});

// DELETE
taskRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  deleteTaskModel(id)
    .then((response) => {
      res.json({
        status: "success",
        data: response,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message,
      });
    });
});
