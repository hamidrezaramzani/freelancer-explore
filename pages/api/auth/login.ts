import ironSessionOptions from "@/helpers/ironSessionOptions";
import { NextApiRequest, NextApiResponse } from "next";
import UserModel from "../../../database/Models/User";
import { withIronSessionApiRoute } from "iron-session/next";
import bcrypt from "bcrypt";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const body = req.body;
        const user = await UserModel.findOne({
            email: body.email,
        });
        if (!user) {
            return res.status(401).json({
                message: "email or password is invalid"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(body.password, user.password);
        if (isPasswordCorrect) {
            (req.session as any).user = {
                id: user._id
            };

            await req.session.save();
            return res.status(200).json({
                message: "user logged successfully"
            });
        } else {
            return res.status(401).json({
                message: "email or password is invalid"
            });
        }

    } catch (error) {
        return res.status(500).json(error);
    }
};

export default withIronSessionApiRoute(handler, ironSessionOptions);