import { Schema, model, Document } from "mongoose";

const schema = new Schema({
    _id: {
        type: Number
    },
    name: {
        type: String,
    }
});

interface ITypeDocument extends Document{
    _id: {
        type: number
    },
    name: {
        type: number,
    }
}

export default model<ITypeDocument>('TypeDocument', schema)
