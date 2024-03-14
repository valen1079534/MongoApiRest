import { Router } from "express";
import { deleteClienteVDL, getClienteVDL, postClienteVDL, putClienteVDL } from "../Controllers/controller.clienteVDL.js";

const ClienteRutaVDL = Router()

ClienteRutaVDL.get("/listarCliente", getClienteVDL)
ClienteRutaVDL.post("/registrarCliente",postClienteVDL)
ClienteRutaVDL.put("/actualizarCliente/:id", putClienteVDL)
ClienteRutaVDL.delete("/eliminarCliente/:id", deleteClienteVDL)

export default ClienteRutaVDL