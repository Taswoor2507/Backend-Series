import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register", registerUser).post(registerUser);
// router.route("/login").post(login)

export default router;
