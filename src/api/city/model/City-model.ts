import { Schema, model, Document } from "mongoose";

const schema = new Schema({
    _id: {
        type: String
    },
    codedepartment: {
        type: String,
    },
    department: {
        type: String,
    },
    city: {
        type: String,
    },

});

interface ICity extends Document{
    codedepartment: {
        type: string,
    },
    department: {
        type: string,
    },
    city: {
        type: string,
    },
}

export default model<ICity>('city', schema, 'cities')
