import { Router } from "express";
import { postAlquilerVDL, putAlquilerVDL } from "../Controllers/controller.alquilerVDL.js";
import { validarTokenVDL } from "../Controllers/controller.autenticacionVDL.js";
import { alquilerValidacionActualizacionVDL, alquilerValidacionRegistroVDL } from "../validation/validacion.alquilerVDL.js";

const alquilerRutaVDL = Router()

alquilerRutaVDL.post("/registroAlquiler",validarTokenVDL, alquilerValidacionRegistroVDL,postAlquilerVDL)
alquilerRutaVDL.put("/actualizacionAlquieler/:id", validarTokenVDL, alquilerValidacionActualizacionVDL,putAlquilerVDL)

export default alquilerRutaVDL