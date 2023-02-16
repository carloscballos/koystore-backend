import { Schema, model, Document } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    typeDocument: {
        type: Number,
        required: true
    },
    document: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    city: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true

    },
    created: {
        type: Date,
        default: Date.now
    }
});

interface ICustomer extends Document{
    name: {
        type: string,
    },
    typeDocument: {
        type: number,
    },
    document: {
        type: number,
    },
    email: {
        type: string,
    },
    phone: {
        type: number,
    },
    city: {
        type: number,
    },
    address: {
        type: string,
    },
    created: {
        type: Date,
    }
}

export default model<ICustomer>('customer', schema, 'customers')