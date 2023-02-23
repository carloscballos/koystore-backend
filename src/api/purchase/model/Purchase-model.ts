import Joi from "joi";
import { Schema, Document, model } from "mongoose";

export interface Purchase extends Document {
    provider: string,
    comments: string,
    items: Array<any>,
    purchaseDate: Date,
    totalSummary: number,
    created: Date,
}

const PurchaseSchema = new Schema({
    provider: {
        type: String,
        required: true
    },
    comments: {
        type: String,
    },
    items: {
        type: Array,
        required: true
    },
    purchaseDate: {
        type: Date,
        required: true
    },
    totalSummary: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

export const PurchaseSchemaJoi = Joi.object({
    provider: Joi.string().required(),
    comments: Joi.string(),
    items: Joi.array().required(),
    purchaseDate: Joi.date().required(),
    totalSummary: Joi.number().required(),
    created: Joi.date()
});

const PurchaseModel = model<Purchase>("Purchase", PurchaseSchema, "purchases")

export default PurchaseModel
