import ProviderModel from "../model/Provider-model";
import Provider from "../model/Provider-model";

export class ProviderDAO {
  static async getAllProviders() {
    try {
      const providers = await ProviderModel.find({});
      return providers;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async createProvider(providerData: typeof Provider) {
    try {
      const provider = await ProviderModel.create(providerData);
      return provider;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}