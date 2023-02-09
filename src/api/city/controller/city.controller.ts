import { Request, Response } from "express";
import City from "../model/city";

export class CityController {

    static async getAll( req: Request, res:Response) : Promise<Response>{
        const cities = await City.find();
        return res.json(cities);
    }

    static async getById( req: Request, res:Response) : Promise<Response>{
        let cityId = req.params.cityId;
        let query = {_id : cityId}
        const city = await City.findOne(query);
        return res.json(city);
    }
}