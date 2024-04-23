import { Router } from "express";
import { getGaleria } from "../controllers/galerias.controller.js";

const router = Router();
router.post("/galeria", getGaleria);

export default router;
