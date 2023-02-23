import {Router} from "express";
import { PurchaseController} from '../controller/Purchase-controller'

export class PurchasesRoutes{
    
    static init(router: Router){

        router
            .route('/purchases')
            .post(PurchaseController.createPurchase)
            .get(PurchaseController.getAllPurchases)

        router
            .route('/purchases/:purchaseId')
            .get(PurchaseController.getById)
            .put(PurchaseController.editById)
    }
}