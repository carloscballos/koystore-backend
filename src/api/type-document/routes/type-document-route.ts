import { TypedocumentController } from '../controller/type-document.controller';
import express from "express";

export class TypedocumentRoutes{
    
    static init(router: express.Router){

        router
            .route('/type-documents')
            .get(TypedocumentController.getAll)

        router
            .route('/type-documents/:typeDocumentId')
            .get(TypedocumentController.getById)
    }
}