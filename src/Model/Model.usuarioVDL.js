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

const UsuarioVDL = mongoose.model('Usuario', usuarioSchema)
export default UsuarioVDL