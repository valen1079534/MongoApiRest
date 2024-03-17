import { check } from "express-validator";

export const clienteValidacionRegistroVDL = [
    check("identificacion", "La identificacion es requerida").not().isEmpty().isNumeric(),

    check("nombres", "El nombre(s) es requerido, maximo 50 caracteres").not().isEmpty().isLength({max:50}),

    check("direccion", "La direccion es requerida, maximo 40 caracteres").not().isEmpty().isLength({max:40}),

    check("telefono", "El tlefono es requerido, maximo 15 caracteres").not().isEmpty().isLength({max:10}),

    check("fecha_nac", "Fecha nacimiento requerido, caracteres son AA/MM/DD").not().isEmpty()
]

export const clienteValidacionActualizarVDL = [
    check("identificacion", "La identificacion es requerida").not().isEmpty().isNumeric(),

    check("nombres", "El nombre(s) es requerido, maximo 50 caracteres").not().isEmpty().isLength({max:50}),

    check("direccion", "La direccion es requerida, maximo 40 caracteres").not().isEmpty().isLength({max:40}),

    check("telefono", "El tlefono es requerido, maximo 15 caracteres").not().isEmpty().isLength({max:10}),

    check("fecha_nac", "Fecha nacimiento requerido, caracteres son AA/MM/DD").not().isEmpty()
]