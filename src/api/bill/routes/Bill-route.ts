import express from "express";
import { BillController} from '../controller/bill-controller'

export class BillsRoutes{
    
    static init(router: express.Router){

        router
            .route('/bills')
            .post(BillController.createBill)
            .get(BillController.getAll)

        router
            .route('/bills/:billId')
            .get(BillController.getById)
            .put(BillController.editById)
    }
}