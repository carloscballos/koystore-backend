import { Request, Response } from "express";
import Joi from 'joi';
import Customer from "../model/Customer-model";

export class CustomerController {

    static async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const customers = await Customer.find();
            return res.json(customers);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async createCustomer(req: Request, res: Response) {
        try {
            const { error } = CustomerController.validateCustomer(req.body);

            if (error) {
                return res.status(400).json({ error: error.details[0].message });
            }

            const customer = req.body;
            const newCustomer = new Customer(customer);
            await newCustomer.save();
            return res.status(201).json({ message: 'Customer successfully saved' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getById(req: Request, res: Response): Promise<Response> {
        try {
            const customer = await Customer.findById(req.params.customerId);
            if (!customer) {
                return res.status(404).json({ error: 'Customer not found' });
            }
            return res.json(customer);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async editById(req: Request, res: Response) {
        try {
            const { error } = CustomerController.validateCustomer(req.body);
            if (error) {
                return res.status(400).json({ error: error.details[0].message });
            }
            const customerId = req.params.customerId;
            const customer = await Customer.findById(customerId);
            if (!customer) {
                return res.status(404).json({ error: 'Customer not found' });
            }
            const { name, typeDocument, document, email, phone, city, address } = req.body;
            Object.assign(customer, {
                name,
                typeDocument,
                document,
                email,
                phone,
                city,
                address
              });
            const updatedCustomer = await customer.save();

            return res.json(updatedCustomer);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    static validateCustomer(customer: any) {
        const schema = Joi.object({
            name: Joi.string().required(),
            typeDocument: Joi.string().required(),
            document: Joi.string().required(),
            email: Joi.string().email().required(),
            phone: Joi.string().required(),
            city: Joi.string().required(),
            address: Joi.string().required(),
        });
        return schema.validate(customer);
    }
}