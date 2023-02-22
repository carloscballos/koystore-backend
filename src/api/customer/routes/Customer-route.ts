import {Router} from "express";
import { CustomerController } from '../controller/Customer-controller'

export class CustomersRoutes{
    
    static init(router: Router){

        router
            .route('/customers')
            .post(CustomerController.createCustomer)
            .get(CustomerController.getAll)

        router
            .route('/customers/:customerId')
            .get(CustomerController.getById)
            .put(CustomerController.editById)
    }
}