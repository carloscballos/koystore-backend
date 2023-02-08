import { Request, Response } from "express";
import TypeDocument from "../model/Type-document";

export class TypedocumentController {

    static async getAll( req: Request, res:Response) : Promise<Response>{
        const typeDocument = await TypeDocument.find();
        return res.json(typeDocument);
    }

    static async getById( req: Request, res:Response) : Promise<Response>{
        let typeDocumentId = req.params.typeDocumentId;
        let query = {_id : typeDocumentId}
        const typeDocument = await TypeDocument.find(query);
        return res.json(typeDocument);
    }
}