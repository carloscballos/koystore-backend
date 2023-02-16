import { Schema, model, Document } from "mongoose";
import { Items } from './Items'

const schema = new Schema({
    billDate: {
        type: Date
    },
    customer: {
        type: String,
    },
    items: {
        type: Array<Items>,
    },
    totalSummary: {
        type: Number,
    },
    comments: {
        type: String,
    },

});

interface IBill extends Document{
    billDate: {
        type: Date
    },
    customer: {
        type: String,
    },
    items: {
        type: Array<Items>,
    },
    totalSummary: {
        type: Number,
    },
    comments: {
        type: String,
    },
}

export default model<IBill>('bill', schema, 'bills')
