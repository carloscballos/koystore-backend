import { ProviderController } from '../controller/Provider-controller';
import { Router } from "express";

export class ProvidersRoutes{
    
    static init(router: Router){

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