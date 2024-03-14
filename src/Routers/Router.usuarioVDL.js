import { Router } from "express";
import { postUsuarioVDL } from "../Controllers/controller.UsuarioVDL.js";

const usuarioRutaVDL = Router()

usuarioRutaVDL.post("/registrarUsuario", postUsuarioVDL)

export default usuarioRutaVDL