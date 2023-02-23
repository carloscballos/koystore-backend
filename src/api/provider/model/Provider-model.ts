import { Schema, model, Document } from "mongoose";
import Joi from "joi";

export interface Provider extends Document {
    name: string;
    typeDocument: number;
    document: number;
    email: string;
    phone: number;
    city: string;
    address: string;
    created: Date;
    Home: boolean;
  }

const providerSchema = new Schema({
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
    },
    home: {
        type: Boolean,
    }
});

export const providerSchemaJoi = Joi.object({
    name: Joi.string().required(),
    typeDocument: Joi.string().required(),
    document: Joi.number().required(),
    email: Joi.string().email().required(),
    phone: Joi.number().required(),
    city: Joi.number().required(),
    address: Joi.string().required(),
    created: Joi.date().default(Date.now),
    home: Joi.boolean()
});

  const ProviderModel = model<Provider>('Provider', providerSchema);

  export default ProviderModel;

