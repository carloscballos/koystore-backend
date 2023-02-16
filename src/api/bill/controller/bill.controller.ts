import { Request, Response } from "express";
import Joi from 'joi';
import Bill from "../model/Bill";

export class BillController {

    static async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const bills = await Bill.find();
            return res.json(bills);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async createBill(req: Request, res: Response) {
        try {
            const { error } = BillController.validateBill(req.body);

            if (error) {
                return res.status(400).json({ error: error.details[0].message });
            }

            const bill = req.body;
            const newBill = new Bill(bill);
            await newBill.save();
            return res.status(201).json({ message: 'Bill successfully saved' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getById(req: Request, res: Response): Promise<Response> {
        try {
            const bill = await Bill.findById(req.params.billId);
            if (!bill) {
                return res.status(404).json({ error: 'Bill not found' });
            }
            return res.json(bill);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async editById(req: Request, res: Response) {
        try {
            const { error } = BillController.validateBill(req.body);
            if (error) {
                return res.status(400).json({ error: error.details[0].message });
            }
            const BillId = req.params.billId;
            const bill = await Bill.findById(BillId);
            if (!bill) {
                return res.status(404).json({ error: 'Bill not found' });
            }
            const { billDate, comments, customer, items, totalSummary} = req.body;
            Object.assign(bill, {
                billDate,
                comments,
                customer,
                items,
                totalSummary
              });
            const updatedBill = await bill.save();

            return res.json(updatedBill);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    static validateBill(bill: any) {
        const schema = Joi.object({
            billDate: Joi.date().required(),
            comments: Joi.string(),
            customer: Joi.string().required(),
            items: Joi.array().required(),
            totalSummary: Joi.string().required(),
        });
        return schema.validate(bill);
    }
}