import { Router } from "express";
import { getArticulosVDL, postArticuloVDL } from "../Controllers/controller.articulosVDL.js";

const articulosRutaVDL = Router()

articulosRutaVDL.get("/listarArticulos", getArticulosVDL)
articulosRutaVDL.post("/registrarArticulo", postArticuloVDL)

export default articulosRutaVDL