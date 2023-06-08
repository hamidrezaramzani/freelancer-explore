import ironSessionOptions from '@/helpers/ironSessionOptions';
import Saved from '@/database/Models/Saved';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from "next";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const userId = (req.session as any).user.id;
        let saveds = await Saved.find({ user: userId });
        return res.status(200).json(saveds.map(saved => {
            saved.isSaved = true;
            return saved;
        }));
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default withIronSessionApiRoute(handler, ironSessionOptions);