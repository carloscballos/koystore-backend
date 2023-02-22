import { Request, Response } from "express";
import { ProviderDAO } from "../dao/Provider-dao";

export class ProviderController {
  static async getAllProviders(req: Request, res: Response) {
    try {
      const providers = await ProviderDAO.getAllProviders();
      res.status(200).json(providers);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  static async createProvider(req: Request, res: Response) {
    try {
      const provider = await ProviderDAO.createProvider(req.body);
      res.status(201).json(provider);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}