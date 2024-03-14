import ArticulosVDL from "../Model/Model.articulosVDL.js";

export const getArticulosVDL = async (req, res) => {
    try {
        const resultado = await ArticulosVDL.find({})

        if(resultado){
            res.status(200).json(resultado)
        }else{
            res.status(404).json({Message: 'No hay articulos registrados '})
        }

    } catch (error) {
        res.status(500).json({Message: 'Error en el servidor'+error})
    }
}

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