import { Router } from "express";
import { InteresRecaudadosVDL, interesPagadosVDL, interesPendienteVDL } from "../Controllers/controller.listarVDL.js";

const rutaListarVDL = Router()

rutaListarVDL.get("/InteresPagos", interesPagadosVDL)
rutaListarVDL.get("/interesPendiente/:id", interesPendienteVDL)
rutaListarVDL.get("/interesRecaudado", InteresRecaudadosVDL)

export default rutaListarVDL