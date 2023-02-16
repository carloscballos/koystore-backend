import express from "express";
import { BillController} from '../controller/bill.controller'

export class BillsRoutes{
    
    static init(router: express.Router){

        router
            .route('/customers')
            .post(BillController.createBill)
            .get(BillController.getAll)

        router
            .route('/customers/:customerId')
            .get(BillController.getById)
            .put(BillController.editById)
    }
}