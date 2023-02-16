import { Request, Response } from "express";
import Joi, {ValidationError} from 'joi'
import City from "../model/city";

export class CityController {

    static async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const cities = await City.find();
            return res.json(cities);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: "Error al buscar ciudades." });
        }
    }

    static async getById(req: Request, res: Response): Promise<Response> {
        try {
            const cityId = req.params.cityId;
            const schema = Joi.object({
                cityId: Joi.string().required(),
            });
            const { error } = schema.validate({ cityId });
            if (error) {
                throw error;
            }
            const query = { _id: cityId };
            const city = await City.findOne(query);
            if (!city) {
                return res.status(404).json({ message: "No se encontró la ciudad solicitada." });
            }
            return res.json(city);
        } catch (err: unknown) {
            if (err instanceof ValidationError) {
                return res.status(400).json({ error: err.message });
            }
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}