import { Router } from "express";
import { facebookAuth } from "./faceAuth.controller.js";
const router = Router();
router.post("/auth/facebook",facebookAuth);
export default router
