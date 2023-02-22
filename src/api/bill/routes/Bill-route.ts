import {Router} from "express";
import { BillController} from '../controller/Bill-controller'

export class BillsRoutes{
    
    static init(router: Router){

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