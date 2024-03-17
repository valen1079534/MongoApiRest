import { Router } from "express";
import { deleteClienteVDL, getClienteVDL, postClienteVDL, putClienteVDL } from "../Controllers/controller.clienteVDL.js";
import { validarTokenVDL } from "../Controllers/controller.autenticacionVDL.js";
import { clienteValidacionActualizarVDL, clienteValidacionRegistroVDL } from "../validation/Validation.clienteVDL.js";

const ClienteRutaVDL = Router()

ClienteRutaVDL.get("/listarCliente",validarTokenVDL,getClienteVDL)
ClienteRutaVDL.post("/registrarCliente", validarTokenVDL, clienteValidacionRegistroVDL,postClienteVDL)
ClienteRutaVDL.put("/actualizarCliente/:id", validarTokenVDL, clienteValidacionActualizarVDL,putClienteVDL)
ClienteRutaVDL.delete("/eliminarCliente/:id", validarTokenVDL,deleteClienteVDL)

export default ClienteRutaVDL