import { Schema, model } from "mongoose";
import Joi from "joi";

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
    isHome: {
        type: Boolean,
    }
});

const providerSchemaJoi = Joi.object({
    name: Joi.string().required(),
    typeDocument: Joi.number().required(),
    document: Joi.number().required(),
    email: Joi.string().email().required(),
    phone: Joi.number().required(),
    city: Joi.string().required(),
    address: Joi.string().required(),
    created: Joi.date().default(Date.now),
    isHome: Joi.boolean()
});

providerSchema.statics.getAllProviders = function() {
    return this.find({});
  };
  
providerSchema.statics.createProvider = async function(providerData) {
    const { error, value } = providerSchemaJoi.validate(providerData);
    if (error) {
      throw new Error(error.details[0].message);
    }
    const provider = await this.create(value);
    return provider;
  };

  const ProviderModel = model('Provider', providerSchema);

  export default ProviderModel;

