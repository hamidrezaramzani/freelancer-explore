import hashPassword from "@/helpers/hashPassword";
import { NextApiRequest, NextApiResponse } from "next";
import UserModel from "../../../database/Models/User";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const body = req.body;
        body.password = await hashPassword(body.password);
        await UserModel.create(body);
        return res.status(201).json({
            message: "user created!"
        });
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default handler;