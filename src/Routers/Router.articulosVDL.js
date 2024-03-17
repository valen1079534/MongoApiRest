import { Router } from "express";
import { postArticuloVDL, putArticuloVDL } from "../Controllers/controller.articulosVDL.js";
import { validarTokenVDL } from "../Controllers/controller.autenticacionVDL.js";
import { articuloValidacionVDL } from "../validation/validacion.articuloVDL.js";
import articulosRutaVDL from './Router.articulosVDL';

const articulosRutaVDL = Router()

articulosRutaVDL.post("/registrarArticulo", validarTokenVDL, articuloValidacionVDL,postArticuloVDL)
articulosRutaVDL.put("/DesactivarArticulo/:id", validarTokenVDL, articuloValidacionVDL, putArticuloVDL)

export default articulosRutaVDL