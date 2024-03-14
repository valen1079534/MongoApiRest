import Cliente from "../Model/Model.ClientesVDL.js";

export const getClienteVDL = async (req, res) =>{
    try {
        const resultado = await Cliente.find({})

        if(resultado){
            res.status(200).json(resultado)
        }else{
            res.status(404).json({Message: 'No hay ningun cliente registrado'})
        }
     } catch (error) {
        res.status(500).json({Message:'Error de servidor' + error})
    }
}

export const postClienteVDL = async (req, res) => {
    try {
        const resultado = await Cliente.create(req.body)

        if(resultado){
            res.status(200).json({Message:'Cliente registrado con exito'})
        }else{
            res.status(404).json({Message:'Fallo registro del cliente'})
        }
    } catch (error) {
        res.status(500).json({Message:'Error en el servidor'+error})
    }
}

export const putClienteVDL = async (req, res) =>{
    try {
        const resultado = await Cliente.findByIdAndUpdate(req.params.id, req.body)

        if(resultado){
            res.status(200).json({Message:'Cliente actualizado con exito'})
        }else{
            res.status(404).json({Message:'Fallo actualizacion del cliente '})
        }

    } catch (error) {
        res.status(500).json({Meesage:'Error en el servidor'+error})
    }
}

export const deleteClienteVDL = async (req, res) =>{
    try {
        const resultado = await Cliente.findByIdAndDelete(req.params.id)

        if(resultado){
            res.status(200).json({Message: 'Cliente eliminado con exito'})
        }else{
            res.status(404).json({Message: 'Fallo eliminacion del cliente'})
        }
    } catch (error) {
        res.status(500).json({Message: 'Error en el servidor'+error})
    }
}