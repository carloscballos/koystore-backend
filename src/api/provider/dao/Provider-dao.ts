import { Provider } from './../model/Provider-model';
import ProviderModel from "../model/Provider-model";
import {providerSchemaJoi} from "../model/Provider-model";

export class ProviderDAO {
  static async getAllProviders() {
    try {
      const providers = await ProviderModel.find({});
      return providers;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async createProvider(providerData: Provider) {
    try {
      const { error, value } = providerSchemaJoi.validate(providerData);
      if (error) {
        throw new Error(error.details[0].message);
      }
      const provider = await ProviderModel.create(value);
      return provider;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async getById(providerId: string) {
    let query = { _id: providerId}
    try {
      const provider = await ProviderModel.findOne(query);
      return provider;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async editById(providerId: string, providerData: Provider) {
    const { error, value } = providerSchemaJoi.validate(providerData);
    if (error) {
      throw new Error(error.details[0].message);
    }
    
    let query = {_id: providerId}
    try {
      const provider = await ProviderModel.findOneAndUpdate(query, value);
      return provider;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}