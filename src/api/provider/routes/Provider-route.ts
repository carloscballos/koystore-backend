import { ProviderController } from '../controller/provider-controller';
import express from "express";

export class ProvidersRoutes{
    
    static init(router: express.Router){

        router
            .route('/providers')
            .post(ProviderController.createProvider)
            .get(ProviderController.getAllProviders)

    //     router
    //         .route('/customers/:customerId')
    //         .get(ProviderController.getById)
    //         .put(ProviderController.editById)
    }
}