import { TypedocumentController } from '../controller/type-document.controller';
import { Router } from "express";

export class TypedocumentRoutes{
    
    static init(router: Router){

        router
            .route('/type-documents')
            .get(TypedocumentController.getAll)

        router
            .route('/type-documents/:typeDocumentId')
            .get(TypedocumentController.getById)
    }
}