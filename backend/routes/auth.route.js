import express, { Router } from "express";
import { signup } from "../controllers/auth.controller.js";
const router = new Router();

router.post('/signup',signup)
export default router;