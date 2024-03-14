import { Router } from "express";
import { deleteInteresVDL, postInteresVDL } from "../Controllers/Controller.interesVDL.js";

const rutaInteresVDL = Router()

rutaInteresVDL.post("/registraIntereses", postInteresVDL)
rutaInteresVDL.delete("/eliminarInterese", deleteInteresVDL)

export default rutaInteresVDL