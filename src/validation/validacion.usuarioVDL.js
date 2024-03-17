import { check } from "express-validator";

export const usuarioValidacionVDL = [
    check("identificacion", "La identificacion es requerida").not().isEmpty().isNumeric(),

    check("password", "Contraseña vacia, maximo 20 caracteres").not().isEmpty().isLength({max:20})
]
