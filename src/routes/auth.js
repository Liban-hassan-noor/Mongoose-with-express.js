import { Router } from "express";

const authRouter = Router();

authRouter.route("/register",registerUser)
authRouter.route("/login",loginUser)