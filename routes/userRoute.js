import express from "express";
import { getMyProfile, login, logout, register } from "../controllers/userControl.js";
import { isAuthenticate } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/logout", logout);

router.get("/me", isAuthenticate, getMyProfile);

export default router;