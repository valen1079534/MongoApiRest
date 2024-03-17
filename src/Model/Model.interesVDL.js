import { mongoose } from "mongoose";

const interesShema = mongoose.Schema({
    mes:{
        type:Number,
        required: true
    },

    fecha:{
        type:Date,
        required: true
    },

    valor:{
        type:Number,
        required: true
    },

    alquiler:{
        type:mongoose.Schema.Types.ObjectId,
        required: true
    },

    estado:{
        type: String,
        enum: ["pagado", "no pagado"],
        required: true
    }
})

const InteresVDL = mongoose.model('InteresVDL', interesShema)
export default InteresVDL