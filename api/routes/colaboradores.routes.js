import { Router } from "express";
import {
  getColaboradorAuth,
  getColaboradores,
} from "../controllers/colaboradores.controller.js";

const router = Router();
router.post("/colaborador-auth", getColaboradorAuth);
router.get("/colaboradores", getColaboradores);
// router.delete('/alumnos/:id', deleteAlumno)
// router.patch('/alumnos/:id', patchAlumno)

export default router;
