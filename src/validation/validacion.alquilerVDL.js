import { check } from "express-validator";

export const alquilerValidacionRegistroVDL = [
    check("valor", "El valor es invalido").not().isEmpty().isFloat(),

    check("fecha", "formato de fecha es AA/MM/DD").not().isEmpty(),

    check("meses", "Error, Caracter de forma numerica").not().isEmpty(),

    check("descripcion", "La descripcion es requerida, maximo 80 caracteres").not().isEmpty().isLength({max:80}),

    check("intereses", "Caracter de modo numerico").not().isEmpty().isNumeric(),

    check("cliente", "El cliente es requerido").not().isEmpty(),

    check("articulo", "el articulo es requerido").not().isEmpty()
]

export const alquilerValidacionActualizacionVDL = [
    check("valor", "El valor es invalido").not().isEmpty().isFloat(),

    check("fecha", "formato de fecha es AA/MM/DD").not().isEmpty(),

    check("meses", "Error, Caracter de forma numerica").not().isEmpty(),

    check("descripcion", "La descripcion es requerida, maximo 80 caracteres").not().isEmpty().isLength({max:80}),

    check("intereses", "Caracter de modo numerico").not().isEmpty().isNumeric(),

    check("cliente", "El cliente es requerido").not().isEmpty(),

    check("articulo", "el articulo es requerido").not().isEmpty()
]