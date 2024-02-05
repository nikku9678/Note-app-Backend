import express from "express";
import {
  deleteTask,
  getMyTask,
  newTask,
  updateTask,
} from "../controllers/taskControl.js";
import { isAuthenticate } from "../middlewares/auth.js";

const router = express.Router();

router.post("/create", isAuthenticate, newTask);

router.get("/mytask", isAuthenticate, getMyTask);

router
  .route("/:id")
  .put(isAuthenticate, updateTask)
  .delete(isAuthenticate, deleteTask);

export default router;