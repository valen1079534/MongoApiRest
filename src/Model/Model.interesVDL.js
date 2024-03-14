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
        type:Number,
        required: true
    }

})

const Interes = mongoose.model('Interes', interesShema)
export default Interes