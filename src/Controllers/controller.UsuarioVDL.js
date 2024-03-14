import UsuarioVDL from './../Model/Model.usuarioVDL.js';

export const postUsuarioVDL = async (req, res) =>{
    try {
        const resultado = await UsuarioVDL.create(req.body)

        if(resultado){
            res.status(200).json({Status:200, Message: 'Usuario registado con exito'})
        }else{
            res.status(404).json({Status:400, Message: 'Fallo registro usuario'})
        }
    } catch (error) {
        res.status(500).json({Message:+error})
    }
}