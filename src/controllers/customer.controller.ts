import { Request, Response } from "express";
import Customer from "../models/Customer";

export async function createCustomer( req: Request, res:Response) : Promise<Response>{
    const customer = req.body;
    const newCustomer = new Customer(customer);
    await newCustomer.save();
    return res.json({
        message: 'Customer successfully saved'
    });
}

export async function getCustomers( req: Request, res:Response) : Promise<Response>{
    const customers = await Customer.find();
    return res.json(customers);
}

export async function getById( req: Request, res:Response) : Promise<Response>{
    let customerId = req.params.customerId;
    let query = {_id : customerId}
    const customer = await Customer.find(query);
    return res.json(customer);
}

export async function editById( req: Request, res:Response) {

        let query = {
            name: req.body.name,
            typeDocument: req.body.typeDocument,
            document: req.body.document,
            email: req.body.email,
            phone: req.body.phone,
            city: req.body.city,
            address: req.body.address,
        }
        const customer = await Customer.findByIdAndUpdate({_id: req.params.customerId}, query)
        return res.json(customer)
}