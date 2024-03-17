import { mongoose } from 'mongoose';

const usuarioSchema = mongoose.Schema({
    identificacion:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    }
})

const UsuarioVDL = mongoose.model('UsuarioVDL', usuarioSchema)
export default UsuarioVDL