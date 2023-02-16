import { Document } from "mongoose";

export interface Items extends Document{
    sku: {
        type: String
    },
    amount: {
        type: Number,
    },
    priceUnit: {
        type: Number,
    },
    totalAmmount: {
        type: Number,
    },
}