import { CityController } from '../controller/city.controller';
import express from "express";

export class CityRoutes{
    
    static init(router: express.Router){

        router
            .route('/cities')
            .get(CityController.getAll)

        router
            .route('/cities/:typeDocumentId')
            .get(CityController.getById)
    }
}