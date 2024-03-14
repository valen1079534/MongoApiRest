import { Router } from "express";
import { postAlquilerVDL, putAlquilerVDL } from "../Controllers/controller.alquilerVDL.js";

const alquilerRutaVDL = Router()

alquilerRutaVDL.post("/registroAlquiler", postAlquilerVDL)
alquilerRutaVDL.put("/actualizacionAlquieler", putAlquilerVDL)

export default alquilerRutaVDL