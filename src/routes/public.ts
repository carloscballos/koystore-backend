import express from 'express';
import { CustomersRoutes } from '../api/customer/routes/Customers-route'
import { TypedocumentRoutes } from '../api/type-document/routes/type-document-route'
import { CityRoutes } from '../api/city/routes/city-route'

export class Public {
    static init(): express.Router{
        let router = express.Router();
        CustomersRoutes.init(router);
        TypedocumentRoutes.init(router);
        CityRoutes.init(router);
        return router
    }
}