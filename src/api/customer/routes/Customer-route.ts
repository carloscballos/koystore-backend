import express from "express";
import { CustomerController} from '../controller/customer-controller'

export class CustomersRoutes{
    
    static init(router: express.Router){

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