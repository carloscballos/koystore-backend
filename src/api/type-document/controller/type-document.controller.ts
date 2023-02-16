import { Request, Response } from "express";
import TypeDocument from "../model/Type-document";

export class TypedocumentController {

    static async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const typeDocuments = await TypeDocument.find();
            return res.json(typeDocuments);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }


    static async getById(req: Request, res: Response): Promise<Response> {
        try {
            const typeDocumentId = req.params.typeDocumentId;
            const typeDocument = await TypeDocument.findById(typeDocumentId);
            if (!typeDocument) {
                return res.status(404).json({ error: 'Type document not found' });
            }
            return res.json(typeDocument);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}