import { Request, Response } from "express";
import { PurchaseDAO } from "../dao/Purchase-dao";

export class PurchaseController {
  static async getAllPurchases(req: Request, res: Response) {
    try {
      const purchases = await PurchaseDAO.getAllPurchases();
      res.status(200).json(purchases);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  static async createPurchase(req: Request, res: Response) {
    try {
      const purchase = await PurchaseDAO.createPurchase(req.body);
      res.status(201).json(purchase);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  static async getById(req: Request, res: Response) {
    try {      
      const purchase = await PurchaseDAO.getById(req.params.purchaseId);
      res.status(201).json(purchase);
    } catch (error) {
      res.status(400).json(error);
    }
  }


  static async editById(req: Request, res: Response) {
    try {
      const purchase = await PurchaseDAO.createPurchase(req.body);
      res.status(201).json(purchase);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}