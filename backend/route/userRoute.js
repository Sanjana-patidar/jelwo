import express from "express";
import {signupUser, loginUser, getAllUsers} from "../controller/userController.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/", getAllUsers);

export default router;