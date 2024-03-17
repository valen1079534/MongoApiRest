import { Router } from "express";
import { postUsuarioVDL } from "../Controllers/controller.UsuarioVDL.js";
import { validarTokenVDL } from "../Controllers/controller.autenticacionVDL.js";
import { usuarioValidacionVDL } from "../validation/validacion.usuarioVDL.js";

const usuarioRutaVDL = Router()

usuarioRutaVDL.post("/registrarUsuario", validarTokenVDL, usuarioValidacionVDL,postUsuarioVDL)

export default usuarioRutaVDL