import {Router} from 'express';
import { CustomersRoutes } from '../api/customer/routes/Customer-route'
import { BillsRoutes } from '../api/bill/routes/Bill-route'
import { TypedocumentRoutes } from '../api/type-document/routes/Type-document-route'
import { CityRoutes } from '../api/city/routes/city-route'
import { ProvidersRoutes } from '../api/provider/routes/Provider-route';

export class Public {
    static init(): Router{
        let router = Router();
        CustomersRoutes.init(router);
        TypedocumentRoutes.init(router);
        CityRoutes.init(router);
        BillsRoutes.init(router);
        ProvidersRoutes.init(router);
        return router
    }
}