import ArticulosVDL from "../Model/Model.articulosVDL.js";

export const postArticuloVDL = async (req, res) =>{
    try {
        const resultado = await ArticulosVDL.create(req.body)

        if(resultado){
            res.status(200).json({Message: 'Articulo registrado'})
        }else{
            res.status(404).json({Message:'Fallo registro aticulo'})
        }
    } catch (error) {
        res.status(500).json({Message:'Error en el servidor'})
    }
}

export const putArticuloVDL = async (req, res) =>{
    try {
        const resultado = await ArticulosVDL.findById(req.params.id)

        resultado.estado="inactivo"
        await resultado.save()

        if(resultado){
            res.status(200).json({Message: "Articulo desactivado"})
        }else{
            res.status(404).json({Message: "El articulo no se pudo desactivar"})
        }
    } catch (error) {
        res.status(500).json({Message: "ERROR SERVIDOR"})
    }
}