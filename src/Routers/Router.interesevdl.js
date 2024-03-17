import { Router } from "express";
import { deleteInteresVDL, postInteresVDL } from "../Controllers/Controller.interesVDL.js";
import { validarTokenVDL } from "../Controllers/controller.autenticacionVDL.js";
import { interesValidacionRegistroVDL } from './../validation/validacion.interesVDL.js';

const rutaInteresVDL = Router()

rutaInteresVDL.post("/registraIntereses", validarTokenVDL, interesValidacionRegistroVDL,postInteresVDL)
rutaInteresVDL.delete("/eliminarInterese/:id", validarTokenVDL,deleteInteresVDL)

export default rutaInteresVDL