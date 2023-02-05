import { Router } from "express";
const router = Router();

import { createCustomer, editById, getById, getCustomers} from '../controllers/customer.controller'

router.route('/customers')
    .post(createCustomer)
    .get(getCustomers)

router.route('/customers/:customerId')
    .post()
    .get(getById)
    .put(editById)

export default router