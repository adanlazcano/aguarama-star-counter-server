import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ClientSchema = new Schema({

    nombre: {
        type: String,
        trim: true,
        require: true
    },
    cel: {
        type: String,
        trim: true,
        require: true,
        unique: true,
        max: 10
    },

    stars: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true
});

export default model('Client', ClientSchema);