import { Purchase } from './../model/Purchase-model';
import PurchaseModel from "../model/Purchase-model";
import { PurchaseSchemaJoi } from "../model/Purchase-model";

export class PurchaseDAO {
  static async getAllPurchases() {
    try {
      const Purchases = await PurchaseModel.find({});
      return Purchases;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async createPurchase(PurchaseData: Purchase) {
    try {
      const { error, value } = PurchaseSchemaJoi.validate(PurchaseData);
      if (error) {
        throw new Error(error.details[0].message);
      }
      const Purchase = await PurchaseModel.create(value);
      return Purchase;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async getById(PurchaseId: string) {
    let query = { _id: PurchaseId}
    try {
      const Purchase = await PurchaseModel.findOne(query);
      return Purchase;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}