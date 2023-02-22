import { CityController } from '../controller/City-controller';
import {Router} from "express";

export class CityRoutes{
    
    static init(router: Router){

        router
            .route('/cities')
            .get(CityController.getAll)

        router
            .route('/cities/:cityId')
            .get(CityController.getById)
    }
}